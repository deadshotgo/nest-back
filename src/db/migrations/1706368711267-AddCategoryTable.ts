import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCategoryTable1706368711267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE category (
            id   SERIAL PRIMARY KEY ,
            name   VARCHAR(100) not null,
            is_active    boolean not null default true,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);
    await queryRunner.query(
      `insert into category(name, is_active) values ('first category', true)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table category`);
  }
}
