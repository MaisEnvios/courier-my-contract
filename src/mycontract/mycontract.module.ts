import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MyContractController } from './mycontract.controller';
import { MyContractService } from './mycontract.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      })
    }),
  ],
  controllers: [MyContractController],
  providers: [MyContractService],
  exports: [MyContractService],
})
export class MyContractModule { }
