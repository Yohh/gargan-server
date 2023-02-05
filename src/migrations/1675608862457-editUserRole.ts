import { MigrationInterface, QueryRunner } from "typeorm";

export class editUserRole1675608862457 implements MigrationInterface {
    name = 'editUserRole1675608862457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`admin\` \`role\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` varchar(255) NOT NULL DEFAULT 'user'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`role\` \`admin\` tinyint NOT NULL`);
    }

}
