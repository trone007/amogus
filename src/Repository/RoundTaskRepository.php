<?php

namespace App\Repository;

use App\Entity\RoundTask;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RoundTask|null find($id, $lockMode = null, $lockVersion = null)
 * @method RoundTask|null findOneBy(array $criteria, array $orderBy = null)
 * @method RoundTask[]    findAll()
 * @method RoundTask[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RoundTaskRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RoundTask::class);
    }

    // /**
    //  * @return RoundTask[] Returns an array of RoundTask objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RoundTask
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
