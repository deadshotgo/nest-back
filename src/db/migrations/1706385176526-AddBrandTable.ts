import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBrandTable1706385176526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE brand(
            id   SERIAL PRIMARY KEY ,
            name   VARCHAR(255) not null ,
            image   VARCHAR(255),
            is_active    boolean not null default true,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);
    await queryRunner.query(
      `insert into brand(name, image, is_active) values ('text prev 1','url to img', true)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      drop table brand`);
  }
}
