import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../Models/weather.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}
  getWatherData(city:string):Observable<Weather> {
   return this.http.get<Weather>( 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=xN4zuRzcxqAtGxz4ic95TiWhr6C7xUvv')
  }
}
