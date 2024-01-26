import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTable1706138216281 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE app_user (
            id   SERIAL PRIMARY KEY ,
            name   VARCHAR(100) not null,
            password varchar(100) not null,
            email    varchar(100) not null,
            role    varchar(100) not null,
            is_admin    boolean not null default false,
            is_active    boolean not null default true,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);
    await queryRunner.query(
      `insert into app_user(name, password, email, role, is_admin, is_active) values ('admin', 'password', 'admin@email.com', 'SUPER_ADMIN', true, true)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table app_user`);
  }
}
