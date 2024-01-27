import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSubCategoryTable1706370456148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE sub_category(
            id   SERIAL PRIMARY KEY ,
            name   VARCHAR(100) not null,
            is_active    boolean not null default true,
            category_id    INT NOT NULL,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6),
            CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id) on update cascade on delete cascade 
        )`);
    await queryRunner.query(
      `insert into sub_category(name, is_active, category_id) values ('first sub-category', true, 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table sub_category`);
  }
}
