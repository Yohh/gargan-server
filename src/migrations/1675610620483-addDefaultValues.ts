import { MigrationInterface, QueryRunner } from "typeorm";

export class addDefaultValues1675610620483 implements MigrationInterface {
    name = 'addDefaultValues1675610620483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`present\` CHANGE \`isUrgent\` \`isUrgent\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`present\` CHANGE \`expensiveRate\` \`expensiveRate\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`isExpensive\` \`isExpensive\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`offeror\` \`offeror\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`partOfferor\` \`partOfferor\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`partOfferor\` \`partOfferor\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`offeror\` \`offeror\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_to_present\` CHANGE \`isExpensive\` \`isExpensive\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`present\` CHANGE \`expensiveRate\` \`expensiveRate\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`present\` CHANGE \`isUrgent\` \`isUrgent\` tinyint NOT NULL`);
    }

}
