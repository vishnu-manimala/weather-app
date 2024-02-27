import { Injectable } from '@angular/core';
import { Weather } from '../Models/weather.api';
import { Observable, delay, retryWhen } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherNowService {

  constructor(private http:HttpClient) { }
  getWeatherData(lat:number|undefined,long:number|undefined):Observable<Weather>{
    return this.http.get<Weather>( `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${long}&apikey=xN4zuRzcxqAtGxz4ic95TiWhr6C7xUvv`)
    .pipe(
      retryWhen(errors =>
          errors.pipe(delay(1000), // Wait 1 second before retrying
                                  retryWhen(errors => errors.pipe(delay(2000))), // Wait 2 seconds on subsequent retries
                                  // ...add more retries as needed
          ))
  )
  }
}
