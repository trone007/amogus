<?php


namespace App\Controller;
use App\Entity\Round;
use App\Entity\RoundTask;
use App\Entity\Task;
use App\Entity\User;
use App\Entity\UserRound;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class RestController extends AbstractFOSRestController
{

	/**
	 * @Route ("/api/users")
	 * @return Response
	 */
	public function index(): Response
	{

		$users = $this->getDoctrine()->getRepository(User::class)
			->findBy([
				'active' => true
			]);

		$view = $this->view($users, 200);
		return $this->handleView($view);
	}

	/**
	 * @Route ("/api/round/start")
	 * @return Response
	 */
	public function startRound(): Response
	{

		$round = $this->getDoctrine()->getRepository(Round::class)
			->findOneBy([
				'status' => Round::STATUSES['ACTIVE']
			]);

		if (!$round)
		{
			$round = new Round();
			$round->setLocationName("longendorf")
				->setStatus(Round::STATUSES['ACTIVE'])
				->setUntil((new \DateTimeImmutable())->add(new \DateInterval("PT15M")));

			$this->getDoctrine()->getManager()->persist($round);

			$tasks = $this->getDoctrine()->getRepository(Task::class)
				->findAll();

			foreach ($tasks as $task)
			{
				$roundTask = new RoundTask();
				$roundTask->setTask($task)
					->setRound($round);

				$this->getDoctrine()->getManager()->persist($roundTask);
			}

			$users = $this->getDoctrine()->getRepository(User::class)
				->findBy(['active' => true]);

			$expect = ['GOOD' => floor(count($users) * 0.8), 'BAD' => floor(count($users) * 0.2)];
			$usedRoles = ['GOOD' => 0, 'BAD' => 0];
			foreach ($users as $user)
			{
				$role = null;
				while (is_null($role))
				{
					$roles = UserRound::ROLES;
					shuffle($roles)[0];
					$role = $roles[0];
//					var_dump($role);die;
					if ($usedRoles[$role] < $expect[$role])
						$usedRoles[$role] += $usedRoles[$role];
				}
				$userRound = new UserRound();
				$userRound->setRole($role)
					->setStatus(UserRound::STATUTES['ACTIVE'])
					->setUser($user)
					->setRound($round);

				$this->getDoctrine()->getManager()->persist($userRound);
			}

			$this->getDoctrine()->getManager()->flush();
		}

		$view = $this->view(null, 200);
		return $this->handleView($view);
	}

	/**
	 * @Route ("/api/round/active")
	 * @return Response
	 */
	public function getActiveRound(): Response
	{

		$round = $this->getDoctrine()->getRepository(Round::class)
			->findOneBy([
				'status' => Round::STATUSES['ACTIVE']
			]);

		$view = $this->view($round, 200);
		return $this->normalize($round);
	}

	private function normalize($object)
	{
//		$normalizer = new ObjectNormalizer();
//		$normalizer->setCircularReferenceLimit(1);
//
//		$normalizer->setCircularReferenceHandler(function ($object) {
//			return $object->getName();
//		});
		$encoder = new JsonEncoder();
		$defaultContext = [
			AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
				return $object->getId();
			},
		];
		$normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);


		$serializer = new Serializer(array($normalizer), array(new JsonEncoder()));
		return new Response($serializer->serialize($object, 'json'), 200);
	}
}