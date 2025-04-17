import { HttpStatus } from '@nestjs/common';
import { ILocationData } from './location.data';

export interface ILocationResponse {
  statusCode: HttpStatus;
  message: string;
  data: ILocationData;
}
