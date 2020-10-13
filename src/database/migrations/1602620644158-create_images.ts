import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602620644158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "images",
            columns: [
                { name: "id", type: "integer", unsigned: true, isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "path", type: "varchar"},
                { name: "orphanage_id", type: "integer", unsigned: true},
            ],
            foreignKeys: [
                { 
                    name: "ImageOrphanages", 
                    columnNames: ['orphanage_id'], 
                    referencedTableName: "orphanages", 
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: "CASCADE",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images")
    }

}
