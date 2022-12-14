import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SampleController } from './api/v1/modules/sample/sample.controller';
import { SampleService } from './api/v1/modules/sample/sample.service';
import { V1Module } from './api/v1/v1.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    V1Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
