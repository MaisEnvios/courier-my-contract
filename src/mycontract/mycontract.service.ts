import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetContracts } from '../application/services/getcontracts';
import { ILocationResponse } from './interface/location.response';
import { CourierAuthService } from 'src/application/common/courier.auth.service';
import { IAuthContract } from 'src/application/interface/auth.contract.interface';
import { GetCardpostContract } from 'src/application/services/get.cardpost.contracts';
import { IContract } from 'src/application/interface/contract.interface';

@Injectable()
export class MyContractService {

  private URL_SERVICE: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.URL_SERVICE = this.configService.get('API_COURIER_PATH');
  }


  async contracts(username: string, password: string, contract: string, federalid: string): Promise<ILocationResponse> {

    try {
      const authService: CourierAuthService = new CourierAuthService(
        this.httpService,
        this.URL_SERVICE,
        username,
        password,
      );
      const auth: IAuthContract = await authService.auth(contract);

      const getContracts: GetContracts = new GetContracts(
        this.httpService,
        this.URL_SERVICE,
        auth.token,
        auth.cnpj,
      );
      const response: IContract[] = await getContracts.execute();
      console.log('response', response)

      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: null,
        data: null,
      }
    } catch (error) {
      console.log('error', error)
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: error,
        data: null,
      }
    }

  }

  async cardpost(username: string, password: string, id: string): Promise<any> {

    try {
      const authService: CourierAuthService = new CourierAuthService(
        this.httpService,
        this.URL_SERVICE,
        username,
        password,
      );
      const auth: IAuthContract = await authService.auth(id);

      const cardpostService: GetCardpostContract = new GetCardpostContract(
        this.httpService,
        this.URL_SERVICE,
        auth.token,
        id,
        auth.cnpj,
      );
      const response: any = await cardpostService.execute();
      console.log('response', response)

      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: null,
        data: null,
      }
    } catch (error) {
      console.log('error', error)
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: error,
        data: null,
      }
    }

  }

}