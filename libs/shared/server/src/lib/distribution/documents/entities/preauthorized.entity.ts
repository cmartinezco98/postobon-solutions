import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('preauthorizeds')
export class Preauthorized {
    @PrimaryColumn({ type: 'varchar', length: 20 })
    code_remission: string;

    @Column({ type: 'date' })
    date_delivery: Date;

    @Column({ type: 'datetime', nullable: true, default: null })
    date_reception: Date | null;

    @Column({ type: 'varchar', length: 100 })
    client_name: string;

    @Column({ type: 'varchar', length: 100 })
    bussines_name: string;

    @Column({ type: 'varchar', length: 25 })
    client_code: string;

    @Column({ type: 'boolean', default: false })
    status: boolean;

    @Column({ type: 'boolean', default: false })
    validated: boolean;
}
