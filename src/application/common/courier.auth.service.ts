import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IAuthContract } from '../interface/auth.contract.interface';

@Injectable()
export class CourierAuthService {

  constructor(
    private readonly httpService: HttpService,
    private readonly url: string,
    private readonly username: string,
    private readonly password: string,
  ) {}

  async auth(contract: string): Promise<IAuthContract> {
    const auth = Buffer.from(`${this.username}:${this.password}`).toString('base64')
    const responseAuth: any = await firstValueFrom(
      this.httpService.post(`${this.url}/token/v1/autentica/contrato`, {
        "numero": contract
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${auth} `,
        }
      })
    );
    console.log('responseAuth.data', responseAuth.data);
    return responseAuth.data as IAuthContract;
  }

}