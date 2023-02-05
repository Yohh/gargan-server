import { MigrationInterface, QueryRunner } from "typeorm";

export class removeCategoryFromList1675611244905 implements MigrationInterface {
    name = 'removeCategoryFromList1675611244905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`list\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_be726a825c7254f55be1540601\` (\`pseudo\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_be726a825c7254f55be1540601\``);
        await queryRunner.query(`ALTER TABLE \`list\` ADD \`category\` varchar(10) NOT NULL`);
    }

}
