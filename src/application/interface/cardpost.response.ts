import { HttpStatus } from "@nestjs/common"

interface IContract { 
  federalid: string
  administrative: string
  contract: string
  cardpost: ICardpost[]
}

interface ICardpost { 
  id: string
  federalid: string
  status: string
}

export interface ICardpostReeponse { 
  statusCode: HttpStatus
  message: string 
  data: IContract | null
}