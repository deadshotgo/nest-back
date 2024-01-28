import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTagTable1706395517261 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE tag(
            id   SERIAL PRIMARY KEY ,
            name   VARCHAR(100) not null ,
            is_active    boolean not null default true,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);
    await queryRunner.query(
      `insert into tag(name, is_active) values ('tag-1', true)`,
    );

    await queryRunner.query(`
        CREATE TABLE tag_products(
            id   SERIAL PRIMARY KEY ,
            tag_id  int not null ,
            product_id  int not null ,
            CONSTRAINT fk_product_id FOREIGN KEY(product_id) REFERENCES product(id) on update cascade on delete cascade,
            CONSTRAINT fk_tag_id FOREIGN KEY(tag_id) REFERENCES tag(id) on update cascade on delete cascade
        )`);
    await queryRunner.query(
      `insert into tag_products(tag_id, product_id) values (1,1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table tag`);
    await queryRunner.query(`drop table tag_products`);
  }
}
