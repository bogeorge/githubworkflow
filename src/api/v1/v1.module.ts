import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { v1Routes } from './router';
import { SampleModule } from './modules/sample/sample.module';

@Module({
  imports: [RouterModule.forRoutes(v1Routes), SampleModule],
  providers: [],
  exports: []
})
export class V1Module {}
