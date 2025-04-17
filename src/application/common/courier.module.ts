import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CourierAuthService } from './courier.auth.service';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      })
    })],
  providers: [CourierAuthService],
  exports: [CourierAuthService],
})
export class CourierAuthModule {}
