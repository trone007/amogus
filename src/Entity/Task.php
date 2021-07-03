<?php

namespace App\Entity;

use App\Repository\TaskRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TaskRepository::class)
 */
class Task
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=511)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=1023, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type;

    /**
     * @ORM\OneToMany(targetEntity=RoundTask::class, mappedBy="task")
     */
    private $roundTasks;

    public function __construct()
    {
        $this->roundTasks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

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
            $roundTask->setTask($this);
        }

        return $this;
    }

    public function removeRoundTask(RoundTask $roundTask): self
    {
        if ($this->roundTasks->removeElement($roundTask)) {
            // set the owning side to null (unless already changed)
            if ($roundTask->getTask() === $this) {
                $roundTask->setTask(null);
            }
        }

        return $this;
    }
}
