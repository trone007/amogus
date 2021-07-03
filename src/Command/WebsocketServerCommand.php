<?php
namespace App\Command;

use App\Service\RoundServiceInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Ratchet\Http\HttpServer;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;
use App\Websocket\MessageHandler;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class WebsocketServerCommand extends Command
{
	private $manager;
	private $roundService;

	public function __construct(EntityManagerInterface $manager, RoundServiceInterface $roundService)
	{
		$this->manager = $manager;
		$this->roundService = $roundService;

		parent::__construct();
	}

	protected static $defaultName = "run:websocket-server";

	protected function execute(InputInterface $input, OutputInterface $output)
	{
		$port = 3001;
		$output->writeln("Starting server on port " . $port);
		$server = IoServer::factory(
			new HttpServer(
				new WsServer(
					new MessageHandler($this->manager, $this->roundService)
				)
			),
			$port
		);
		$server->run();
		return 0;
	}
}