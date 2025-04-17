import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { IContract } from "../interface/contract.interface";

export class GetContracts {

  constructor(
    private readonly httpService: HttpService,
    private readonly url: string,
    private readonly token: string,
    private readonly federalid: string,
) { }

  async execute(): Promise<IContract[]> {
    const url: string = `${this.url}/meucontrato/v1/empresas/${this.federalid}/contratos?status=ATIVO&vigente=S`;
    console.log('url', url)
    const response: any = await firstValueFrom(this.httpService.get(url, {
      headers: {
        'Authorization': `Bearer ${this.token} `,
      },
      timeout: 14400000,
    }));
    return response.data;
  }
}