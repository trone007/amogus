<?php


namespace App\Controller;
use App\Entity\User;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RestController extends AbstractFOSRestController
{

	/**
	 * @Route ("/api/users")
	 * @return Response
	 */
	public function index(): Response
	{

		return $this->render('auth/index.html.twig', []);
	}
}