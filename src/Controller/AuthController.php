<?php


namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class AuthController
{

	/**
	 * @Route ("/")
	 * @return Response
	 */
	public function index(): Response
	{
		return new Response(
			'<html><body>Ну что, погнали</body></html>'
		);
	}
}