<?php


namespace App\Controller;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController
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
	 * @Route ("/login",  methods={"POST"})
	 * @param Request $request
	 * @return Response
	 */
	public function login(Request $request): Response
	{
		$name = $request->request->get('name');
		$avatar = $request->files->get('avatar');
		$transliterator = \Transliterator::create('Any-Latin');

		$toAscii = \Transliterator::create('Latin-ASCII');
		$login = $toAscii->transliterate($transliterator->transliterate($name));

		$user = $this->getDoctrine()->getRepository(User::class)
			->findOneBy([
				'login' => $login
			]);

		if ($user)
		{
			return $this->redirect("/game");
		}

		$user = new User();
		$user->setAvatarFile($avatar)
			->setName($name)
			->setLogin($login);

		$this->getDoctrine()->getManager()->persist($user);
		$this->getDoctrine()->getManager()->flush();

		return $this->redirect("/game");
	}

	/**
	 * @Route ("/game",  methods={"GET"})
	 * @return Response
	 */
	public function game(): Response
	{
		return $this->render('auth/index.html.twig', []);
	}
}