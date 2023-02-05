import { MigrationInterface, QueryRunner } from "typeorm";

export class editDefaultValues1675619772127 implements MigrationInterface {
    name = 'editDefaultValues1675619772127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`amount\` \`amount\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`percentage\` \`percentage\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`percentage\` \`percentage\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`amount\` \`amount\` int NOT NULL`);
    }

}
