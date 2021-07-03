<?php

namespace App\Entity;

use App\Repository\RoundTaskRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass=RoundTaskRepository::class)
 */
class RoundTask
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
	 * @MaxDepth(1)
     * @ORM\ManyToOne(targetEntity=Round::class, inversedBy="roundTasks")
     * @ORM\JoinColumn(nullable=false)
     */
    private $round;

    /**
	 * @MaxDepth(1)
	 * @ORM\ManyToOne(targetEntity=Task::class, inversedBy="roundTasks")
     * @ORM\JoinColumn(nullable=false)
     */
    private $task;

    /**
	 *  @MaxDepth(1)
	 * @ORM\ManyToOne(targetEntity=User::class, inversedBy="roundTasks")
     */
    private $completedBy;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $completedAt;

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

    public function getTask(): ?Task
    {
        return $this->task;
    }

    public function setTask(?Task $task): self
    {
        $this->task = $task;

        return $this;
    }

    public function getCompletedBy(): ?User
    {
        return $this->completedBy;
    }

    public function setCompletedBy(?User $completedBy): self
    {
        $this->completedBy = $completedBy;

        return $this;
    }

    public function getCompletedAt(): ?\DateTimeImmutable
    {
        return $this->completedAt;
    }

    public function setCompletedAt(?\DateTimeImmutable $completedAt): self
    {
        $this->completedAt = $completedAt;

        return $this;
    }
}
