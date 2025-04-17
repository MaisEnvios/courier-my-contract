import { HttpStatus } from '@nestjs/common';
import { IZipcodeData } from './zipcode.data';

export interface IZipcodeResponse {
  statusCode: HttpStatus;
  message: string;
  data: IZipcodeData;
}
