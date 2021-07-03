<?php


namespace App\Service;


use App\Entity\Round;

interface RoundServiceInterface
{
	public function completeTask($taskId, $userId, $additional);
	public function changeRole($userId, $newRole);
	public function getActiveRound(): ?Round;
	public function getTimer();
	public function completeActiveRound();
	public function startRound();
	public function getCompletedTasks($type);
	public function getCurrentRole($userId);
	public function startDiscussion();
}