<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210703093901 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE round_task (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, round_id INTEGER NOT NULL, task_id INTEGER NOT NULL, completed_by_id INTEGER DEFAULT NULL, completed_at DATETIME DEFAULT NULL --(DC2Type:datetime_immutable)
        )');
        $this->addSql('CREATE INDEX IDX_F7C9CA85A6005CA0 ON round_task (round_id)');
        $this->addSql('CREATE INDEX IDX_F7C9CA858DB60186 ON round_task (task_id)');
        $this->addSql('CREATE INDEX IDX_F7C9CA8585ECDE76 ON round_task (completed_by_id)');
        $this->addSql('CREATE TABLE user_round (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, round_id INTEGER NOT NULL, user_id INTEGER NOT NULL, role VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE INDEX IDX_272C116CA6005CA0 ON user_round (round_id)');
        $this->addSql('CREATE INDEX IDX_272C116CA76ED395 ON user_round (user_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__round AS SELECT id, ð«ðµñstatus, location_name FROM round');
        $this->addSql('DROP TABLE round');
        $this->addSql('CREATE TABLE round (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, location_name VARCHAR(255) NOT NULL COLLATE BINARY, status VARCHAR(255) NOT NULL, until DATETIME DEFAULT NULL --(DC2Type:datetime_immutable)
        )');
        $this->addSql('INSERT INTO round (id, status, location_name) SELECT id, ð«ðµñstatus, location_name FROM __temp__round');
        $this->addSql('DROP TABLE __temp__round');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE round_task');
        $this->addSql('DROP TABLE user_round');
        $this->addSql('DROP TABLE user_tound');
        $this->addSql('CREATE TEMPORARY TABLE __temp__round AS SELECT id, status, location_name FROM round');
        $this->addSql('DROP TABLE round');
        $this->addSql('CREATE TABLE round (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, location_name VARCHAR(255) NOT NULL, ð«ðµñstatus VARCHAR(255) NOT NULL COLLATE BINARY)');
        $this->addSql('INSERT INTO round (id, ð«ðµñstatus, location_name) SELECT id, status, location_name FROM __temp__round');
        $this->addSql('DROP TABLE __temp__round');
    }
}
