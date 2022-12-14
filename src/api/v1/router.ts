import { Routes } from 'nest-router';
import { SampleModule } from './modules/sample/sample.module';

export const v1Routes: Routes = [
  {
    path: '/v1',
    children: [
      {
        path: '/',
        children: [
          {
            path: 'sample',
            module: SampleModule
          }
        ]
      }
    ]
  }
];
