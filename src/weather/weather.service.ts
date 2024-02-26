import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Weather } from './weather.interface';

require('dotenv').config();
const appUrl = process.env.APP_URL;
const key = process.env.KEY;

@Injectable()
export class WeatherService {
  async getPrevisaoByCity(city: string): Promise<Weather> {
    try {
      const response = await axios.get(
        `${appUrl}${city}&units=metric&APPID=${key}`,
      );
      const previsao = new Weather();
      previsao.name = response.data.name;
      previsao.country = response.data.sys.country;
      previsao.main = response.data.weather[0].main;
      previsao.description = response.data.weather[0].description;
      previsao.temp = response.data.main.temp;
      previsao.humidity = response.data.main.humidity;
      return previsao;
    } catch (err) {
      console.log(`Cidade ${city} não encontrada!`);
    }
  }
}
