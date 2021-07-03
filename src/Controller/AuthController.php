<?php


namespace App\Controller;
use Symfony\Component\HttpFoundation\Request;
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
		return $this->render('auth/index.html.twig', []);
	}

	/**
	 * @Route ("/",  methods={"POST"})
	 * @return Response
	 */
	public function login(Request $request): Response
	{
		$name = $request->request->get('name');
//		$ava

		return $this->render('auth/index.html.twig', []);
	}
}