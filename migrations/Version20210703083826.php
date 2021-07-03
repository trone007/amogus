<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210703083826 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE round (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, ð«ðµñstatus VARCHAR(255) NOT NULL, location_name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE task (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(511) NOT NULL, description VARCHAR(1023) DEFAULT NULL, type VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, ñ‚ñ„name VARCHAR(255) NOT NULL, avatar VARCHAR(511) DEFAULT NULL, login VARCHAR(255) NOT NULL)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE round');
        $this->addSql('DROP TABLE task');
        $this->addSql('DROP TABLE user');
    }
}
