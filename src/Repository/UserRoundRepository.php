<?php

namespace App\Repository;

use App\Entity\UserRound;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserRound|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserRound|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserRound[]    findAll()
 * @method UserRound[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRoundRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserRound::class);
    }

    // /**
    //  * @return UserRound[] Returns an array of UserRound objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserRound
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
