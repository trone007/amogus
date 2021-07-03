<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @Vich\Uploadable
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=511, nullable=true)
     */
    private $avatar;

    /**
	 * @Vich\UploadableField(mapping="avatar_file", fileNameProperty="image")
	 * @var File
	 */
    private $avatarFile;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $login;

    /**
     * @ORM\OneToMany(targetEntity=UserRound::class, mappedBy="user")
     */
    private $userRounds;

    /**
     * @ORM\OneToMany(targetEntity=RoundTask::class, mappedBy="completedBy")
     */
    private $roundTasks;

	/**
	 * @ORM\Column(type="datetime")
	 * @var \DateTime
	 */
    private $updatedAt;

	/**
	 * @ORM\Column(type="boolean")
	 */
    private $active;

    public function __construct()
    {
    	$this->updatedAt = new \DateTime('now');
    	$this->active = true;
        $this->userRounds = new ArrayCollection();
        $this->roundTasks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getLogin(): ?string
    {
        return $this->login;
    }

    public function setLogin(string $login): self
    {
        $this->login = $login;

        return $this;
    }

    /**
     * @return Collection|UserRound[]
     */
    public function getUserRounds(): Collection
    {
        return $this->userRounds;
    }

    public function addUserRound(UserRound $userRound): self
    {
        if (!$this->userRounds->contains($userRound)) {
            $this->userRounds[] = $userRound;
            $userRound->setUser($this);
        }

        return $this;
    }

    public function removeUserRound(UserRound $userRound): self
    {
        if ($this->userRounds->removeElement($userRound)) {
            // set the owning side to null (unless already changed)
            if ($userRound->getUser() === $this) {
                $userRound->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|RoundTask[]
     */
    public function getRoundTasks(): Collection
    {
        return $this->roundTasks;
    }

    public function addRoundTask(RoundTask $roundTask): self
    {
        if (!$this->roundTasks->contains($roundTask)) {
            $this->roundTasks[] = $roundTask;
            $roundTask->setCompletedBy($this);
        }

        return $this;
    }

    public function removeRoundTask(RoundTask $roundTask): self
    {
        if ($this->roundTasks->removeElement($roundTask)) {
            // set the owning side to null (unless already changed)
            if ($roundTask->getCompletedBy() === $this) {
                $roundTask->setCompletedBy(null);
            }
        }

        return $this;
    }

	public function setAvatarFile(File $avatarFile = null)
	{
		$this->avatarFile = $avatarFile;

		if ($avatarFile) {
			// if 'updatedAt' is not defined in your entity, use another property
			$this->updatedAt = new \DateTime('now');
		}

		return $this;
	}

	/**
	 * @return ?File
	 */
	public function getAvatarFile(): ?File
	{
		return $this->avatarFile;
	}

	/**
	 * @return \DateTime
	 */
	public function getUpdatedAt(): \DateTime
	{
		return $this->updatedAt;
	}

	/**
	 * @param \DateTime $updatedAt
	 * @return User
	 */
	public function setUpdatedAt(\DateTime $updatedAt): User
	{
		$this->updatedAt = $updatedAt;
		return $this;
	}

	/**
	 * @return mixed
	 */
	public function getActive()
	{
		return $this->active;
	}

	/**
	 * @param mixed $active
	 * @return User
	 */
	public function setActive($active)
	{
		$this->active = $active;
		return $this;
	}


}
