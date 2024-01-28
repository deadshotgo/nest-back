import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddImageProductTable1706392694412 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE image_product(
            id   SERIAL PRIMARY KEY ,
            path   VARCHAR(500) not null ,
            main   boolean not null default true,
            product_id   int not null,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6),
            CONSTRAINT fk_product_id FOREIGN KEY(product_id) REFERENCES product(id) on update cascade on delete cascade
        )`);
    await queryRunner.query(
      `insert into image_product(path, main, product_id) values ('link to img', true, 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table image_product`);
  }
}
