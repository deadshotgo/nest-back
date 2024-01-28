import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTagBlogsTable1706398438544 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE tag_blogs(
            id   SERIAL PRIMARY KEY ,
            tag_id  int not null ,
            blog_id  int not null ,
            CONSTRAINT fk_tag_id FOREIGN KEY(tag_id) REFERENCES tag(id) on update cascade on delete cascade,
            CONSTRAINT fk_blog_id FOREIGN KEY(blog_id) REFERENCES blog(id) on update cascade on delete cascade
        )`);
    await queryRunner.query(
      `insert into tag_blogs(tag_id, blog_id) values (1,1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table tag_blogs`);
  }
}
