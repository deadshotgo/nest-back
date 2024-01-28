import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBlogTable1706383899875 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE blog(
            id   SERIAL PRIMARY KEY ,
            preview_text   text not null,
            text   text,
            title    VARCHAR(300) not null,
            img    VARCHAR(255) not null,
            preview    VARCHAR(255) not null,
            is_active    boolean not null default true,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);
    await queryRunner.query(
      `insert into blog(preview_text, text, title, img, preview, is_active) values ('text prev 1','text - text - text - text', 'hello im title', 'url to img', 'url to img', true)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      drop table blog `);
  }
}
