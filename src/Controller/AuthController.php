<?php


namespace App\Controller;
use App\Entity\User;
use App\Form\UserFormType;
use Cassandra\Type\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Form\Type\VichFileType;

class AuthController extends AbstractController
{

	/**
	 * @Route ("/")
	 * @return Response
	 */
	public function index(): Response
	{
		$form = $this->createForm(UserFormType::class, new User());
//		$form->getValidator($form->getCSRFFieldName())->setOption('required', false);
		return $this->render('auth/index.html.twig', ['form' => $form->createView()]);
	}

	/**
	 * @Route ("/login",  methods={"POST"})
	 * @param Request $request
	 * @return Response
	 */
	public function login(Request $request): Response
	{
//		var_dump($this->get('session')->get('userId'));die;
//		if ($this->get('session')->get('userId'))
//		{
//			return $this->redirect("/game");
//		}
		$name = $request->request->get('name');
		$transliterator = \Transliterator::create('Any-Latin');
		$toAscii = \Transliterator::create('Latin-ASCII');
		$login = $toAscii->transliterate($transliterator->transliterate($name));

		$user = $this->getDoctrine()->getRepository(User::class)
			->findOneBy([
				'login' => $login
			]);

		if ($user)
		{
			$this->get('session')->set('userId', $user->getId());
			return $this->redirect("/game");
		}

		$form = $this->createForm(UserFormType::class, new User());
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid())
		{

			$user = $form->getData();

			$user->setLogin($login);
			$this->getDoctrine()->getManager()->persist($user);
			$this->getDoctrine()->getManager()->flush();
		}

		$this->get('session')->set('userId', $user->getId());

		return $this->redirect("/game");
	}

	/**
	 * @Route ("/game",  methods={"GET"})
	 * @return Response
	 */
	public function game(): Response
	{
		return $this->render('game/index.html.twig', [
			'userId' => $this->get('session')->get('userId')
		]);
	}
}