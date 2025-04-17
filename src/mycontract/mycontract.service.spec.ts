import { HttpModule } from "@nestjs/axios";
import { HttpStatus } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Test } from "@nestjs/testing";
import { AddressService } from "./address.service";
import { LocationTypeEnum } from "./enum/location.type.enum";

describe('AddressService', () => {
  const USERNAME: string = 'buy2buy77';
  const PASSWORD: string = 'Sorte@2019';
  const CARDPOST: string = '0075081636';

  let service: AddressService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: process.env.NODE_ENV
            ? '.env.' + process.env.NODE_ENV
            : '.env',
          isGlobal: true,
        }),
        HttpModule.registerAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            timeout: +configService.get('TIMEOUT'),
            maxRedirects: +configService.get('MAX_REDIRECT'),
          }),
          inject: [ConfigService],
        })
      ],
      providers: [AddressService],
    }).compile();
    service = moduleRef.get<AddressService>(AddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('service location by state ', async () => {
    const response = await service.location(USERNAME, PASSWORD, CARDPOST, {
      state: 'SC',
      type: LocationTypeEnum.CITY,
      records: 900,
    });
    expect(response.statusCode).toBe(HttpStatus.OK);
  });

  it('service zipcode by state ', async () => {
    const response = await service.zipcode(USERNAME, PASSWORD, CARDPOST, {
      state: 'SC',
      type: LocationTypeEnum.CITY,
      records: 50,
    });
    console.log('response', response.data.items);
    expect(response.statusCode).toBe(HttpStatus.OK);
  });

it('service location by city ', async () => {
    const response = await service.location(USERNAME, PASSWORD, CARDPOST, {
      state: 'SC',
      type: LocationTypeEnum.CITY,
      city: 'Joinville',
    });
    expect(response.statusCode).toBe(HttpStatus.OK);
  });

  it('service location by city not found', async () => {
    const response = await service.location(USERNAME, PASSWORD, CARDPOST, {
      state: 'SC',
      type: LocationTypeEnum.CITY,
      city: 'JoinvilleNotFound',
    });
    expect(response.statusCode).toBe(HttpStatus.BAD_REQUEST);
  });

})