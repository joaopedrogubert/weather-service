import { Controller, Param, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Weather } from './weather.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('/:city')
  async getPrevisaoByCity(@Param('city') city: string): Promise<Weather> {
    return this.weatherService.getPrevisaoByCity(city);
  }
}
