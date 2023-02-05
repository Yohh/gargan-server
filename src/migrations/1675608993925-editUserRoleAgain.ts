import { MigrationInterface, QueryRunner } from "typeorm";

export class editUserRoleAgain1675608993925 implements MigrationInterface {
    name = 'editUserRoleAgain1675608993925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`role\` \`role\` varchar(255) NOT NULL DEFAULT 'USER'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`role\` \`role\` varchar(255) NOT NULL DEFAULT 'user'`);
    }

}
