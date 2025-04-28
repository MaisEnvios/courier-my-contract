import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { ICardpost } from "../interface/cardpost.interface";

export class GetCardpostContract {

  constructor(
    private readonly httpService: HttpService,
    private readonly url: string,
    private readonly token: string,
    private readonly contract: string,
    private readonly federalid: string,
  ) { }

  async execute(): Promise<ICardpost[]> {
    const url: string = `${this.url}/meucontrato/v1/empresas/${this.federalid}/contratos/${this.contract}/cartoes?status=ATIVO&vigente=S&page=0&size=100`;
    console.log('url', url)
    const response: any = await firstValueFrom(this.httpService.get(url, {
      headers: {
        'Authorization': `Bearer ${this.token} `,
      },
      timeout: 14400000,
    }));
    return response.data.itens;
  }
}

