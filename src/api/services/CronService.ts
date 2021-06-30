import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import uuid from 'uuid';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Cron } from '../models/Cron';
import {  CronRepository } from '../repositories/CronRepository';

@Service()
export class CronService {

    constructor(
        @OrmRepository() private cronRepository: CronRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }


    public async create(cron: Cron): Promise<string> {
        this.log.info('Create a new cron job => ');
        cron.id = uuid.v1();
        await this.cronRepository.save(cron);
        return cron.id;
    }

    public async update(id: string, pet: Cron): Promise<string> {
        //code to update the cron job
        return id;
    }

    public async delete(id: string): Promise<void> {
        this.log.info('Delete a detail');
        // code to delete the cron job
    }

    public async get(id: string): Promise<void> {
        this.log.info('GET a cron details');
        // code to delete the cron job
    }

}
