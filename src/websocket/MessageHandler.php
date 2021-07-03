<?php
namespace App\Websocket;

use App\Entity\User;
use App\Service\RoundServiceInterface;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;
use SplObjectStorage;


class MessageHandler implements MessageComponentInterface
{
	protected $connections;
	/**
	 * @var EntityManagerInterface
	 */
	private $manager;

	/**
	 * @var RoundServiceInterface
	 */
	private $roundService;

	public function __construct(EntityManagerInterface $manager, RoundServiceInterface $roundService)
	{
		$this->manager = $manager;
		$this->connections = new SplObjectStorage;
		$this->roundService = $roundService;
	}

	public function onOpen(ConnectionInterface $conn)
	{
		$this->connections->attach($conn);
	}

	public function onMessage(ConnectionInterface $from, $msg)
	{
		$msgDecode = json_decode($msg, true);

		if (isset($msgDecode['method']))
		{
			/**
			 * @var User $user
			 */
			$user = $this->manager->getRepository(User::class)
								  ->findOneBy(['id' => $msgDecode['userId']]);

			switch ($msgDecode['method']){
				case 'getId':
					$res = $user->getId();
					break;
				case 'getUser':
					$res = $user->getName();
					break;
				case 'getLogin':
					$res = $user->getLogin();
					break;
				case 'getAvatar':
					$res = $user->getAvatar();
					break;
				case 'getUserRounds':
					$res = $user->getUserRounds();
					break;
				case 'getRoundTasks':
					$res = $user->getRoundTasks();
					break;
				case 'getAvatarFile':
					$res = $user->getAvatarFile();
					break;
				case 'getUpdatedAt':
					$res = $user->getUpdatedAt();
					break;
				case 'getActive':
					$res = $user->getActive();
					break;
				default: $res = $msg;
			}
		}
		else
		{
			$res = $msg;
		}

		foreach($this->connections as $connection)
		{
			if($connection === $from)
			{
				continue;
			}
			
			$connection->send($res);
		}
	}

	public function onClose(ConnectionInterface $conn)
	{
		$this->connections->detach($conn);
	}

	public function onError(ConnectionInterface $conn, Exception $e)
	{
		file_put_contents('log.txt', $e->getMessage());
		$this->connections->detach($conn);
		$conn->close();
	}
}