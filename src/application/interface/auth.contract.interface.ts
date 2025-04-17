interface IContract {
  numero: string
  dr: number
  api: number[]
  apis: any[]
}

export interface IAuthContract { 
  ambiente: string
  id: string
  ip: string
  perfil: string
  cnpj: string
  categoria: string
  emissao: string
  expiraEm: string
  zoneOffset: string
  contrato: IContract
  token: string
}