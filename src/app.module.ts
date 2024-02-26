import { Module } from '@nestjs/common';
import { WeatherService } from './weather/weather.service';
import { WeatherController } from './weather/weather.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class AppModule {}
