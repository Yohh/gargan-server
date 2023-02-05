import { MigrationInterface, QueryRunner } from "typeorm";

export class addOnDeletCascadeOption1675609985209 implements MigrationInterface {
    name = 'addOnDeletCascadeOption1675609985209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`present\` DROP FOREIGN KEY \`FK_a3e23b5385c8ddcab26d08a3f4d\``);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` DROP FOREIGN KEY \`FK_77949d9ad353a39e8725447445c\``);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` DROP FOREIGN KEY \`FK_8b2682d3e4d267339acbdc7663a\``);
        await queryRunner.query(`ALTER TABLE \`list\` DROP FOREIGN KEY \`FK_46ded14b26382088c9f032f8953\``);
        await queryRunner.query(`ALTER TABLE \`present\` ADD CONSTRAINT \`FK_a3e23b5385c8ddcab26d08a3f4d\` FOREIGN KEY (\`listId\`) REFERENCES \`list\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` ADD CONSTRAINT \`FK_8b2682d3e4d267339acbdc7663a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` ADD CONSTRAINT \`FK_77949d9ad353a39e8725447445c\` FOREIGN KEY (\`presentId\`) REFERENCES \`present\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`list\` ADD CONSTRAINT \`FK_46ded14b26382088c9f032f8953\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`list\` DROP FOREIGN KEY \`FK_46ded14b26382088c9f032f8953\``);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` DROP FOREIGN KEY \`FK_77949d9ad353a39e8725447445c\``);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` DROP FOREIGN KEY \`FK_8b2682d3e4d267339acbdc7663a\``);
        await queryRunner.query(`ALTER TABLE \`present\` DROP FOREIGN KEY \`FK_a3e23b5385c8ddcab26d08a3f4d\``);
        await queryRunner.query(`ALTER TABLE \`list\` ADD CONSTRAINT \`FK_46ded14b26382088c9f032f8953\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` ADD CONSTRAINT \`FK_8b2682d3e4d267339acbdc7663a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` ADD CONSTRAINT \`FK_77949d9ad353a39e8725447445c\` FOREIGN KEY (\`presentId\`) REFERENCES \`present\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`present\` ADD CONSTRAINT \`FK_a3e23b5385c8ddcab26d08a3f4d\` FOREIGN KEY (\`listId\`) REFERENCES \`list\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
