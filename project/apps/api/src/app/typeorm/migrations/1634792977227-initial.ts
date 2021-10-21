import { MigrationInterface, QueryRunner } from 'typeorm';
import { Categories, Boards } from '../../entities';
import { Board, GENDER } from '../../interface/board.interface';
import { Category, CATEGORY_TYPE } from '../../interface/category.interface';

export class initial1634792977227 implements MigrationInterface {
  name = 'initial1634792977227';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`categories\` (\`name\` enum ('カテゴリA', 'カテゴリB', 'カテゴリC') NOT NULL COMMENT 'カテゴリー', PRIMARY KEY (\`name\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`boards\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'ID', \`name\` varchar(255) NOT NULL COMMENT '名前', \`age\` int NOT NULL COMMENT '年齢', \`gender\` enum ('男', '女') NOT NULL COMMENT '性別', \`title\` varchar(255) NOT NULL COMMENT 'タイトル', \`text\` varchar(255) NOT NULL COMMENT '本文', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`boards_category_categories\` (\`boardsId\` int NOT NULL, \`categoriesName\` enum ('カテゴリA', 'カテゴリB', 'カテゴリC') NOT NULL, INDEX \`IDX_af931e228eb1878476e28f463a\` (\`boardsId\`), INDEX \`IDX_1ef5c2fa35ba44547f98141d12\` (\`categoriesName\`), PRIMARY KEY (\`boardsId\`, \`categoriesName\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`boards_category_categories\` ADD CONSTRAINT \`FK_af931e228eb1878476e28f463ae\` FOREIGN KEY (\`boardsId\`) REFERENCES \`boards\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE \`boards_category_categories\` ADD CONSTRAINT \`FK_1ef5c2fa35ba44547f98141d121\` FOREIGN KEY (\`categoriesName\`) REFERENCES \`categories\`(\`name\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    // カテゴリ
    const param1: Category[] = [
      {
        name: CATEGORY_TYPE.A,
      },
    ];
    await queryRunner.manager.save(Categories, param1);

    // ボード
    const param: Board[] = [
      {
        title: 'bbb',
        text: 'ccc',
        category: [param1[0]],
        name: 'aaa',
        gender: GENDER.MALE,
        age: 1,
      },
    ];
    await queryRunner.manager.save(Boards, param);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`boards_category_categories\` DROP FOREIGN KEY \`FK_1ef5c2fa35ba44547f98141d121\``
    );
    await queryRunner.query(
      `ALTER TABLE \`boards_category_categories\` DROP FOREIGN KEY \`FK_af931e228eb1878476e28f463ae\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_1ef5c2fa35ba44547f98141d12\` ON \`boards_category_categories\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_af931e228eb1878476e28f463a\` ON \`boards_category_categories\``
    );
    await queryRunner.query(`DROP TABLE \`boards_category_categories\``);
    await queryRunner.query(`DROP TABLE \`boards\``);
    await queryRunner.query(`DROP TABLE \`categories\``);
  }
}
