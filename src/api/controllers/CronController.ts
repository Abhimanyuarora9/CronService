import { JsonController, Post, Body} from 'routing-controllers';
import { CronService } from '../services/CronService';

@JsonController('/v1/cron')
export class CronController {

    constructor(
        private cronService: CronService
    ) { }


    @Post()
    public post(@Body() body: any): Promise<any> {
        return this.cronService.create(body);
    }


    // CRUD to update , get and delete a cron job in the DB by cron ID

}
