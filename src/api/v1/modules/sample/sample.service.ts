import { Injectable } from '@nestjs/common';
import { env } from 'node:process';
@Injectable()
export class SampleService {
  getHello(): string {

    console.log(`ES_ID: ${env.ES_ID}`)
    console.log(`ESCLOUDID: ${env.ESCLOUDID}`)

    return 'Hello From Sample Service!!';
  }
}
