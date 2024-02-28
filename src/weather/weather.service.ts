import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Weather } from './weather.interface';

require('dotenv').config();
const appUrl = process.env.APP_URL;
const key = process.env.KEY;

@Injectable()
export class WeatherService {
  async getPrevisaoByCity(city: string): Promise<Weather> {
    const response = await axios
      .get(`${appUrl}${city}&units=metric&APPID=${key}`)
      .catch(function (error) {
        throw new HttpException(
          `City ${city} not found.`,
          HttpStatus.NOT_FOUND,
        );
      });
    const previsao = new Weather();
    previsao.name = response.data.name;
    previsao.country = response.data.sys.country;
    previsao.main = response.data.weather[0].main;
    previsao.description = response.data.weather[0].description;
    previsao.temp = response.data.main.temp;
    previsao.humidity = response.data.main.humidity;
    console.log(response.data);
    return previsao;
  }
}
