import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

export class GetZipcode {

  constructor(
    private readonly httpService: HttpService,
    private readonly url: string,
    private readonly token: string,
    private readonly city: string,
    private readonly page: number,
    private readonly range: string,
    private readonly records: number,
    private readonly state: string,
) { }

  async execute() {
    let url: string = `${this.url}/cep/v2/enderecos?uf=${this.state}&page=${this.page | 0}&size=${this.records | 50}`;
    if (this.city) url += '&localidade=' + this.city;
    if (this.range) url += '&cepNaFaixa=' + this.range;
console.log('url', url);
    const response: any = await firstValueFrom(this.httpService.get(url, {
      headers: {
        'Authorization': `Bearer ${this.token} `,
      },
      timeout: 14400000,
    }));
    return response.data;
  }
}