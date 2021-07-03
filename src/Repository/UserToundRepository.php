<?php

namespace App\Repository;

use App\Entity\UserTound;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserTound|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserTound|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserTound[]    findAll()
 * @method UserTound[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserToundRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserTound::class);
    }

    // /**
    //  * @return UserTound[] Returns an array of UserTound objects
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
    public function findOneBySomeField($value): ?UserTound
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
