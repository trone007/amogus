<?php

namespace App\Entity;

use App\Repository\RoundRepository;
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
    private $Ые�status;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $location_name;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getЫе�status(): ?string
    {
        return $this->Ые�status;
    }

    public function setЫе�status(string $Ые�status): self
    {
        $this->Ые�status = $Ые�status;

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
}
