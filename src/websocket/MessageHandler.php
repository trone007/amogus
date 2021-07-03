<?php
namespace App\Websocket;

use App\Entity\User;
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

	public function __construct(EntityManagerInterface $manager)
	{
		$this->manager = $manager;
		$this->connections = new SplObjectStorage;
	}

	public function onOpen(ConnectionInterface $conn)
	{
		$this->connections->attach($conn);
	}

	public function onMessage(ConnectionInterface $from, $msg)
	{
		$msg = json_decode($msg, true);

		switch ($msg['method']){
			case 'getUser':
				/**
				 * @var User $user
				 */
				$user = $this->manager->getRepository(User::class)
							 ->findOneBy(['id' => $msg['userId']]);

				break;
		}

		foreach($this->connections as $connection)
		{
			if($connection === $from)
			{
				continue;
			}

			// $connection->send($msg);
			$connection->send($user->getName());
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