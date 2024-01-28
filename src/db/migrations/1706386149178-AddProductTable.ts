import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductTable1706386149178 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE product(
            id   SERIAL PRIMARY KEY ,
            title   VARCHAR(255) not null,
            description    text default null,
            information    text default null,
            qty    integer default 0,
            price    integer default 0,
            likes     integer default 0,
            article    VARCHAR(255) not null,
            feature    boolean default false,
            is_active    boolean not null default true,
            category_id    INT NOT NULL,
            sub_category_id    INT NOT NULL,
            brand_id    INT NOT NULL,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6),
            CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id) on update cascade on delete cascade,
            CONSTRAINT fk_sub_category_id FOREIGN KEY(sub_category_id) REFERENCES sub_category(id) on update cascade on delete cascade,
            CONSTRAINT fk_brand_id FOREIGN KEY(brand_id) REFERENCES brand(id) on update cascade on delete cascade
        )`);
    await queryRunner.query(
      `insert into product(title, description, information, qty, price, likes, article, feature, is_active, category_id, sub_category_id, brand_id )
             values ('test product','description for product', 'information for product', 100, 300, 0, 'qwe234519', true, true, 1, 1, 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table product`);
  }
}
