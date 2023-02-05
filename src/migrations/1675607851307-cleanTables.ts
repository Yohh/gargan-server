import { MigrationInterface, QueryRunner } from "typeorm";

export class cleanTables1675607851307 implements MigrationInterface {
    name = 'cleanTables1675607851307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`present\` ADD \`tag\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`list\` ADD \`child\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`list\` DROP COLUMN \`child\``);
        await queryRunner.query(`ALTER TABLE \`present\` DROP COLUMN \`tag\``);
    }

}
