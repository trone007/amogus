<?php

namespace App\Entity;

use App\Repository\UserRoundRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass=UserRoundRepository::class)
 */
class UserRound
{
	const ROLES = [
		'BAD' => 'BAD',
		'GOOD' => 'GOOD'
	];

	const STATUTES = [
		'ACTIVE' => 'ACTIVE',
		'COMPLETED' => 'COMPLETED',
		'FAILED' => 'FAILED'
	];
	/**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
	 * @MaxDepth(1)
     * @ORM\ManyToOne(targetEntity=Round::class, inversedBy="userRounds")
     * @ORM\JoinColumn(nullable=false)
     */
    private $round;

    /**
	 * @MaxDepth(1)
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="userRounds")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $role;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRound(): ?Round
    {
        return $this->round;
    }

    public function setRound(?Round $round): self
    {
        $this->round = $round;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): self
    {
        $this->role = $role;

        return $this;
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
}
