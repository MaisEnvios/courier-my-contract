import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MyContractModule } from './mycontract/mycontract.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? '.env.' + process.env.NODE_ENV
        : '.env',
      isGlobal: true,
    }),
    MyContractModule,
  ],
})
export class AppModule { }
