import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ContractsDto } from './dto/contracts.dto';
import { MyContractService } from './mycontract.service';

@Controller()
export class MyContractController {
  constructor(private readonly service: MyContractService) { }

  @MessagePattern('query.contract')
  async contracts(@Payload() dto: ContractsDto): Promise<any> {
    return await this.service.contracts(dto.username, dto.password, dto.contract, dto.federalid);
  }

  @MessagePattern('query.contract.cardpost')
  async cardpost(@Payload() dto: ContractsDto): Promise<any> {
    return await this.service.cardpost(dto.username, dto.password, dto.contract);
  }

}
