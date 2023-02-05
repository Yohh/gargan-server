import { MigrationInterface, QueryRunner } from "typeorm";

export class addRoleToUser1675608667789 implements MigrationInterface {
    name = 'addRoleToUser1675608667789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`admin\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`admin\``);
    }

}
