<?php


namespace App\Service;


interface RoundServiceInterface
{
	public function completeTask($taskId, $userId, $additional);
	public function changeRole($userId, $newRole);
	public function getActiveRound();
	public function getTimer();
	public function completeActiveRound();
	public function startRound();
	public function getCompletedTasks($type);
	public function getCurrentRole($userId);
}