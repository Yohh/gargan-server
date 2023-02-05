import { MigrationInterface, QueryRunner } from "typeorm";

export class createDatabase1675629430747 implements MigrationInterface {
    name = 'createDatabase1675629430747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`present\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`tag\` varchar(10) NOT NULL, \`isUrgent\` tinyint NOT NULL DEFAULT 0, \`link\` varchar(100) NOT NULL, \`expensiveRate\` int NOT NULL DEFAULT '0', \`listId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_to_present\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isExpensive\` tinyint NOT NULL DEFAULT 0, \`offeror\` tinyint NOT NULL DEFAULT 1, \`partOfferor\` tinyint NOT NULL DEFAULT 0, \`amount\` int NOT NULL DEFAULT '0', \`percentage\` int NOT NULL DEFAULT '0', \`userId\` int NULL, \`presentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`pseudo\` varchar(10) NOT NULL, \`email\` varchar(20) NOT NULL, \`password\` varchar(30) NOT NULL, \`role\` varchar(255) NOT NULL DEFAULT 'USER', UNIQUE INDEX \`IDX_be726a825c7254f55be1540601\` (\`pseudo\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`list\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(10) NOT NULL, \`main\` tinyint NOT NULL, \`child\` tinyint NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
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
        await queryRunner.query(`DROP TABLE \`list\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_be726a825c7254f55be1540601\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`user_to_present\``);
        await queryRunner.query(`DROP TABLE \`present\``);
    }

}
