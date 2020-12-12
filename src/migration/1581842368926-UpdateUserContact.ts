import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserContact1581842368926 implements MigrationInterface {
  name = 'UpdateUserContact1581842368926';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user_contacts" DROP CONSTRAINT "FK_a81491e712124db8d5423803ecb"`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" DROP CONSTRAINT "FK_723d7146cb329c4a2a707a7c650"`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" ADD CONSTRAINT "FK_a81491e712124db8d5423803ecb" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" ADD CONSTRAINT "FK_723d7146cb329c4a2a707a7c650" FOREIGN KEY ("contact_type_id") REFERENCES "contact_types"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user_contacts" DROP CONSTRAINT "FK_723d7146cb329c4a2a707a7c650"`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" DROP CONSTRAINT "FK_a81491e712124db8d5423803ecb"`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" ADD CONSTRAINT "FK_723d7146cb329c4a2a707a7c650" FOREIGN KEY ("contact_type_id") REFERENCES "contact_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    await queryRunner.query(`ALTER TABLE "user_contacts" ADD CONSTRAINT "FK_a81491e712124db8d5423803ecb" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
  }

}
