import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentInterface } from './common/configurations/environment.interface';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService<EnvironmentInterface>,
  ) {}
  getHello(): string {
    console.log('PORT IS:', this.configService.get('port'));
    return 'Hello World!';
  }
}
