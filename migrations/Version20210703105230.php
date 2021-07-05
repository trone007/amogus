<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210703105230 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_F7C9CA85A6005CA0');
        $this->addSql('DROP INDEX IDX_F7C9CA858DB60186');
        $this->addSql('DROP INDEX IDX_F7C9CA8585ECDE76');
        $this->addSql('CREATE TEMPORARY TABLE __temp__round_task AS SELECT id, round_id, task_id, completed_by_id, completed_at FROM round_task');
        $this->addSql('DROP TABLE round_task');
        $this->addSql('CREATE TABLE round_task (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, round_id INTEGER NOT NULL, task_id INTEGER NOT NULL, completed_by_id INTEGER DEFAULT NULL, completed_at DATETIME DEFAULT NULL --(DC2Type:datetime_immutable)
        , CONSTRAINT FK_F7C9CA85A6005CA0 FOREIGN KEY (round_id) REFERENCES round (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F7C9CA858DB60186 FOREIGN KEY (task_id) REFERENCES task (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F7C9CA8585ECDE76 FOREIGN KEY (completed_by_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO round_task (id, round_id, task_id, completed_by_id, completed_at) SELECT id, round_id, task_id, completed_by_id, completed_at FROM __temp__round_task');
        $this->addSql('DROP TABLE __temp__round_task');
        $this->addSql('CREATE INDEX IDX_F7C9CA85A6005CA0 ON round_task (round_id)');
        $this->addSql('CREATE INDEX IDX_F7C9CA858DB60186 ON round_task (task_id)');
        $this->addSql('CREATE INDEX IDX_F7C9CA8585ECDE76 ON round_task (completed_by_id)');
        $this->addSql('ALTER TABLE user ADD COLUMN active BOOLEAN DEFAULT true');
        $this->addSql('DROP INDEX IDX_272C116CA6005CA0');
        $this->addSql('DROP INDEX IDX_272C116CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__user_round AS SELECT id, round_id, user_id, role, status FROM user_round');
        $this->addSql('DROP TABLE user_round');
        $this->addSql('CREATE TABLE user_round (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, round_id INTEGER NOT NULL, user_id INTEGER NOT NULL, role VARCHAR(255) NOT NULL COLLATE BINARY, status VARCHAR(255) NOT NULL COLLATE BINARY, CONSTRAINT FK_272C116CA6005CA0 FOREIGN KEY (round_id) REFERENCES round (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_272C116CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO user_round (id, round_id, user_id, role, status) SELECT id, round_id, user_id, role, status FROM __temp__user_round');
        $this->addSql('DROP TABLE __temp__user_round');
        $this->addSql('CREATE INDEX IDX_272C116CA6005CA0 ON user_round (round_id)');
        $this->addSql('CREATE INDEX IDX_272C116CA76ED395 ON user_round (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_F7C9CA85A6005CA0');
        $this->addSql('DROP INDEX IDX_F7C9CA858DB60186');
        $this->addSql('DROP INDEX IDX_F7C9CA8585ECDE76');
        $this->addSql('CREATE TEMPORARY TABLE __temp__round_task AS SELECT id, round_id, task_id, completed_by_id, completed_at FROM round_task');
        $this->addSql('DROP TABLE round_task');
        $this->addSql('CREATE TABLE round_task (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, round_id INTEGER NOT NULL, task_id INTEGER NOT NULL, completed_by_id INTEGER DEFAULT NULL, completed_at DATETIME DEFAULT NULL --(DC2Type:datetime_immutable)
        )');
        $this->addSql('INSERT INTO round_task (id, round_id, task_id, completed_by_id, completed_at) SELECT id, round_id, task_id, completed_by_id, completed_at FROM __temp__round_task');
        $this->addSql('DROP TABLE __temp__round_task');
        $this->addSql('CREATE INDEX IDX_F7C9CA85A6005CA0 ON round_task (round_id)');
        $this->addSql('CREATE INDEX IDX_F7C9CA858DB60186 ON round_task (task_id)');
        $this->addSql('CREATE INDEX IDX_F7C9CA8585ECDE76 ON round_task (completed_by_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__user AS SELECT id, name, avatar, login, updated_at FROM user');
        $this->addSql('DROP TABLE user');
        $this->addSql('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, avatar VARCHAR(511) DEFAULT NULL, login VARCHAR(255) NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('INSERT INTO user (id, name, avatar, login, updated_at) SELECT id, name, avatar, login, updated_at FROM __temp__user');
        $this->addSql('DROP TABLE __temp__user');
        $this->addSql('DROP INDEX IDX_272C116CA6005CA0');
        $this->addSql('DROP INDEX IDX_272C116CA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__user_round AS SELECT id, round_id, user_id, role, status FROM user_round');
        $this->addSql('DROP TABLE user_round');
        $this->addSql('CREATE TABLE user_round (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, round_id INTEGER NOT NULL, user_id INTEGER NOT NULL, role VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL)');
        $this->addSql('INSERT INTO user_round (id, round_id, user_id, role, status) SELECT id, round_id, user_id, role, status FROM __temp__user_round');
        $this->addSql('DROP TABLE __temp__user_round');
        $this->addSql('CREATE INDEX IDX_272C116CA6005CA0 ON user_round (round_id)');
        $this->addSql('CREATE INDEX IDX_272C116CA76ED395 ON user_round (user_id)');
    }
}
