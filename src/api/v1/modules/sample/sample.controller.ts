import { Controller, Get } from '@nestjs/common';
import { SampleService } from './sample.service';

@Controller()
export class SampleController {
  constructor(private readonly appService: SampleService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
