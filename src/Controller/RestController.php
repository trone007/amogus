<?php


namespace App\Controller;
use App\Entity\Round;
use App\Entity\RoundTask;
use App\Entity\Task;
use App\Entity\User;
use App\Entity\UserRound;
use App\Service\RoundServiceInterface;
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
	 * @var RoundServiceInterface
	 */
	private $roundService;

	/**
	 * RestController constructor.
	 * @param RoundServiceInterface $roundService
	 */
	public function __construct(RoundServiceInterface $roundService)
	{
		$this->roundService = $roundService;
	}


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
		$this->roundService->startRound();
		$view = $this->view(null, 200);
		return $this->handleView($view);
	}

	/**
	 * @Route ("/api/round/active")
	 * @return Response
	 */
	public function getActiveRound(): Response
	{
		$round = $this->roundService->getActiveRound();
		return $this->normalize($round);
	}

	/**
	 * @Route ("/api/round/timer")
	 * @return Response
	 */
	public function getTimer(): Response
	{
		$view = $this->view($this->roundService->getTimer(), 200);
		return $this->handleView($view);
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