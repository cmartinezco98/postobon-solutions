import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, FindOptionsWhere } from 'typeorm';
import { Preauthorized } from '../../entities/preauthorized.entity';
import { PreauthorizedRepository } from './preauthorized.repository.interface';

@Injectable()
export class ORMPreauthorizedRepository
    implements PreauthorizedRepository {

    constructor(
        @InjectRepository(Preauthorized)
        private readonly repo: Repository<Preauthorized>,
    ) { }

    async findByDateRange(start: Date, end: Date, route?: string): Promise<Preauthorized[]> {
        const where: FindOptionsWhere<Preauthorized> = {
            date_delivery: Between(start, end),
        };
        return this.repo.find({ where, order: { date_delivery: 'ASC' } });
    }

    async findById(code_remission: string) {
        return this.repo.findOne({ where: { code_remission } });
    }

    async save(documento: Preauthorized) {
        return this.repo.save(documento);
    }
}