import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddContactsTable1706399171550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE contact(
            id   SERIAL PRIMARY KEY ,
            path   VARCHAR(255) default null,
            address    VARCHAR(400) default null,
            gmail   VARCHAR(255) default null,
            phone_number    VARCHAR(255) default null,
            footer_text    text default null,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);

    await queryRunner.query(
      `insert into contact(path, address, gmail, phone_number, footer_text ) values ('','[]','[]','[]','')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table contact`);
  }
}
