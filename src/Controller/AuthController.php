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
	 * @Route ("/",  methods={"POST"})
	 * @return Response
	 */
	public function login(Request $request): Response
	{
		$name = $request->request->get('name');
		$avatar = $request->files->get('avatar');
		$login = $this->translit($name);

		$user = $this->getDoctrine()->getRepository(User::class)
			->findBy([
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

	private function translit($text)
	{
		$mask = array(
			"a" => "а", "b" => "б", "v" => "в", "g" => "г", "d" => "д", "e" => "е", "yo" => "ё",
			"j" => "ж", "z" => "з", "i" => "и", "i" => "й", "k" => "к",
			"l" => "л", "m" => "м", "n" => "н", "o" => "о", "p" => "п", "r" => "р", "s" => "с", "t" => "т",
			"y" => "у", "f" => "ф", "h" => "х", "c" => "ц",
			"ch" => "ч", "sh" => "ш", "sh" => "щ", "i" => "ы", "e" => "е", "u" => "у", "ya" => "я", "A" => "А", "B" => "Б",
			"V" => "В", "G" => "Г", "D" => "Д", "E" => "Е", "Yo" => "Ё", "J" => "Ж", "Z" => "З", "I" => "И", "I" => "Й", "K" => "К", "L" => "Л", "M" => "М",
			"N" => "Н", "O" => "О", "P" => "П",
			"R" => "Р", "S" => "С", "T" => "Т", "Y" => "Ю", "F" => "Ф", "H" => "Х", "C" => "Ц", "Ch" => "Ч", "Sh" => "Ш",
			"Sh" => "Щ", "I" => "Ы", "E" => "Е", "U" => "У", "Ya" => "Я", "'" => "ь", "'" => "Ь", "''" => "ъ", "''" => "Ъ", "j" => "ї", "i" => "и", "g" => "ґ",
			"ye" => "є", "J" => "Ї", "I" => "І",
			"G" => "Ґ", "YE" => "Є"
		);

		return strtr($text, $mask);
	}
}