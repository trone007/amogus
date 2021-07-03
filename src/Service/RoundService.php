<?php


namespace App\Service;


use App\Entity\Round;
use App\Entity\RoundTask;
use App\Entity\Task;
use App\Entity\User;
use App\Entity\UserRound;
use Doctrine\ORM\EntityManagerInterface;

class RoundService implements RoundServiceInterface
{

	/**
	 * @var EntityManagerInterface $manager
	 */
	private $manager;

	/**
	 * RoundService constructor.
	 * @param EntityManagerInterface $manager
	 */
	public function __construct(EntityManagerInterface $manager)
	{
		$this->manager = $manager;
	}


	public function completeTask($taskId, $userId, $additional)
	{
		$round = $this->getActiveRound();

		if (!$round)
		{
			return;
		}

		$task = $this->manager->getRepository(Task::class)->find($taskId);

		if (!$task)
		{
			return;
		}


		/**
		 * @var RoundTask $roundTask
		 */
		$roundTask = $this->manager->getRepository(RoundTask::class)->findOneBy([
			'round' => $round,
			'task' => $task
		]);

		if (!$roundTask)
		{
			return;
		}
		$user = $this->manager->getRepository(User::class)->find($userId);

		$roundTask->setCompletedAt(new \DateTimeImmutable())
			->setCompletedBy($user);

		$this->manager->persist($roundTask);
		$this->manager->flush();
	}

	public function changeRole($userId, $newRole)
	{
		$round = $this->getActiveRound();
		$user = $this->manager->getRepository(User::class)->find($userId);

		if (!UserRound::ROLES[$newRole])
		{
			return;
		}

		if (!$user)
		{
			return;
		}

		/**
		 * @var UserRound $userRound
		 */
		$userRound = $this->manager->getRepository(UserRound::class)->findOneBy([
			'user' => $user,
			'round' => $round
		]);

		$userRound->setRole(UserRound::ROLES[$newRole]);

		$this->manager->persist($userRound);
		$this->manager->flush();
	}

	public function getActiveRound(): ?Round
	{
		return $this->manager->getRepository(Round::class)
			->findOneBy([
				'status' => Round::STATUSES['ACTIVE']
			]);
	}

	public function getTimer()
	{
		$round = $this->getActiveRound();
		if (!$round)
		{
			return 0;
		}

		$diff = $round->getUntil()->getTimestamp() - (new \DateTime())->getTimestamp();
		return $diff < 0 ? 0 : $diff;
	}

	public function completeActiveRound()
	{
		$round = $this->getActiveRound();

		if (!$round)
		{
			return;
		}

		$round->setStatus(Round::STATUSES['COMPLETED']);

		$this->manager->persist($round);
		$this->manager->flush();
	}

	public function startRound()
	{

		$round = $this->getActiveRound();

		if (!$round)
		{
			$round = new Round();
			$round->setLocationName("longendorf")
				->setStatus(Round::STATUSES['ACTIVE'])
				->setUntil((new \DateTimeImmutable())->add(new \DateInterval("PT15M")));

			$this->manager->getManager()->persist($round);

			$tasks = $this->manager->getRepository(Task::class)
				->findAll();

			foreach ($tasks as $task)
			{
				$roundTask = new RoundTask();
				$roundTask->setTask($task)
					->setRound($round);

				$this->manager->getManager()->persist($roundTask);
			}

			$users = $this->manager->getRepository(User::class)
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
					if ($usedRoles[$role] < $expect[$role])
						$usedRoles[$role] += $usedRoles[$role];
				}
				$userRound = new UserRound();
				$userRound->setRole($role)
					->setStatus(UserRound::STATUTES['ACTIVE'])
					->setUser($user)
					->setRound($round);

				$this->manager->getManager()->persist($userRound);
			}

			$this->manager->getManager()->flush();
		}
	}

	public function getCompletedTasks($type = null)
	{
		$round = $this->getActiveRound();
		if (!$round)
		{
			return [];
		}

		$qb = $this->manager->createQueryBuilder(); // $em is your entity manager
		$completedTasks = $qb->select("r")
			->from("RoundTask r")
			->where($qb->expr()->isNotNull("r.completedBy"))
			->andWhere('r.round = :round')
			->setParameter('round', $round)
			->getQuery()
			->getResult();

		return $completedTasks;
	}

	public function getCurrentRole($userId)
	{
		$round = $this->getActiveRound();
		if (!$round)
		{
			return '';
		}

		$user = $this->manager->getRepository(User::class)->find($userId);

		/**
		 * @var UserRound $userRound
		 */
		$userRound = $this->manager->getRepository(UserRound::class)
			->findOneBy([
				'round' => $round,
				'user' => $user
			]);

		return $userRound->getRole();
	}

	public function startDiscussion()
	{
		// TODO: Implement startDiscussion() method.
	}
}