import { MigrationInterface, QueryRunner } from 'typeorm';

export class DatabaseInit1581764511557 implements MigrationInterface {
  name = 'DatabaseInit1581764511557';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "date_reg" TIMESTAMP NOT NULL DEFAULT now(), "last_name" character varying NOT NULL, "first_name" character varying NOT NULL, "middle_name" character varying, "birthday" date NOT NULL, "biography" character varying NOT NULL, "is_locked" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`CREATE INDEX "IDX_563c3188039deb1689b2571413" ON "users" ("email", "password") `, undefined);
    await queryRunner.query(`CREATE TABLE "user_contacts" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, "is_default" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, "contact_type_id" integer, CONSTRAINT "UQ_50436a9f6228610239930a25510" UNIQUE ("value"), CONSTRAINT "PK_c7048d25b5fda1fa70501fac9ca" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`CREATE INDEX "IDX_9bb6a85b0216ad7518db120b3e" ON "user_contacts" ("value", "contact_type_id") `, undefined);
    await queryRunner.query(`CREATE TABLE "contact_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_10f3caa7a9f3773f8f25b1167a3" UNIQUE ("name"), CONSTRAINT "PK_cfbbcaf06c9ffa278519a0ff810" PRIMARY KEY ("id"))`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" ADD CONSTRAINT "FK_a81491e712124db8d5423803ecb" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" ADD CONSTRAINT "FK_723d7146cb329c4a2a707a7c650" FOREIGN KEY ("contact_type_id") REFERENCES "contact_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user_contacts" DROP CONSTRAINT "FK_723d7146cb329c4a2a707a7c650"`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" DROP CONSTRAINT "FK_a81491e712124db8d5423803ecb"`, undefined);
    await queryRunner.query(`DROP TABLE "contact_types"`, undefined);
    await queryRunner.query(`DROP INDEX "IDX_9bb6a85b0216ad7518db120b3e"`, undefined);
    await queryRunner.query(`DROP TABLE "user_contacts"`, undefined);
    await queryRunner.query(`DROP INDEX "IDX_563c3188039deb1689b2571413"`, undefined);
    await queryRunner.query(`DROP TABLE "users"`, undefined);
  }

}
