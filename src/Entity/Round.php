<?php

namespace App\Entity;

use App\Repository\RoundRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RoundRepository::class)
 */
class Round
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
    private $status;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $location_name;

    /**
     * @ORM\OneToMany(targetEntity=UserRound::class, mappedBy="round")
     */
    private $userRounds;

    /**
     * @ORM\OneToMany(targetEntity=RoundTask::class, mappedBy="round")
     */
    private $roundTasks;


	/**
	 * @ORM\Column(type="datetime_immutable", nullable=true)
	 */
	private $until;

    public function __construct()
    {
        $this->userRounds = new ArrayCollection();
        $this->roundTasks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getLocationName(): ?string
    {
        return $this->location_name;
    }

    public function setLocationName(string $location_name): self
    {
        $this->location_name = $location_name;

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
            $userRound->setRound($this);
        }

        return $this;
    }

    public function removeUserRound(UserRound $userRound): self
    {
        if ($this->userRounds->removeElement($userRound)) {
            // set the owning side to null (unless already changed)
            if ($userRound->getRound() === $this) {
                $userRound->setRound(null);
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
            $roundTask->setRound($this);
        }

        return $this;
    }

    public function removeRoundTask(RoundTask $roundTask): self
    {
        if ($this->roundTasks->removeElement($roundTask)) {
            // set the owning side to null (unless already changed)
            if ($roundTask->getRound() === $this) {
                $roundTask->setRound(null);
            }
        }

        return $this;
    }

	public function getUntil(): ?\DateTimeImmutable
	{
		return $this->until;
	}

	public function setUntil(?\DateTimeImmutable $until)
	{
		$this->until = $until;
		return $this;
	}


}
