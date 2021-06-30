import { EntityRepository, Repository } from 'typeorm';

import { Cron } from '../models/Cron';

@EntityRepository(Cron)
export class CronRepository extends Repository<Cron> {


}
