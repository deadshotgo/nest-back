import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColorTable1706395511288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE color(
            id   SERIAL PRIMARY KEY ,
            name   VARCHAR(100) not null ,
            color   VARCHAR(50),
            is_active    boolean not null default true,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);
    await queryRunner.query(
      `insert into color(name, color, is_active) values ('white','#ffffff', true)`,
    );

    await queryRunner.query(`
        CREATE TABLE color_products(
            id   SERIAL PRIMARY KEY ,
            color_id   int not null ,
            product_id   int not null ,
            CONSTRAINT fk_product_id FOREIGN KEY(product_id) REFERENCES product(id) on update cascade on delete cascade,
            CONSTRAINT fk_color_id FOREIGN KEY(color_id) REFERENCES color(id) on update cascade on delete cascade
        )`);
    await queryRunner.query(
      `insert into color_products(color_id, product_id) values (1,1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table color`);
    await queryRunner.query(`drop table color_products`);
  }
}
