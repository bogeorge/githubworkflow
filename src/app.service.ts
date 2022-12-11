import { Injectable } from '@nestjs/common';
import { env } from 'node:process';
@Injectable()
export class AppService {
  getHello(): string {

    console.log(env.ES_ID)

    return 'Hello World!!';
  }
}
