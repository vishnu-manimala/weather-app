import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Weather } from './Models/weather.api';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './Services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherNowService } from './Services/weather-now.service';
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { PlaceSearchResult } from './Models/google.model';
import { GoogleMapsModule } from '@angular/google-maps';
import { ButtonclickComponent } from "./buttonclick/buttonclick.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [WeatherNowService],
    imports: [CommonModule, RouterOutlet, FormsModule, HttpClientModule, AutocompleteComponent, GoogleMapsModule, ButtonclickComponent]
})
export class AppComponent {
  title = 'angular-wether-app';
  weatherData!:Weather;
  temp:number =0;
  mintemp:number = 0;
  maxtemp:number = 0;
  humidity:number = 0;
  wind:number = 0;
  searchCity:any;
  city:string | undefined = 'Thiruvananthapuram';
  lat:number|undefined = 8.5241391;
  long:number|undefined  = 76.9366376;
  fromValue: PlaceSearchResult = { address: '' };
  constructor(private service: WeatherNowService, private cdr: ChangeDetectorRef){
    this.getweather()
  }
  async getWeatherDataCity() {
    try {
      console.log(this.fromValue)
    this.lat = this.fromValue.location?.lat();
    this.long = this.fromValue.location?.lng();
     console.log("this.fromValue",this.fromValue.location?.lat())
     console.log("this",this.fromValue.location?.lng())
     this.city = this.fromValue.name;
     console.log(" this.city", this.city)
    this.getweather()
      this.cdr.detectChanges(); 
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  getweather(){
    this.service.getWeatherData(this.lat,this.long).subscribe((result:Weather)=>{
      this.weatherData = result;
      console.log("chec",this.weatherData.timelines.daily[0]);
      this.temp = this.weatherData.timelines.daily[0].values.temperatureAvg;
      this.mintemp = this.weatherData.timelines.daily[0].values.temperatureMin;
      this.maxtemp = this.weatherData.timelines.daily[0].values.temperatureMax;
      this.humidity = this.weatherData.timelines.daily[0].values.humidityAvg;
      this.wind = this.weatherData.timelines.daily[0].values.windSpeedAvg;
     });
  }

  emittedEvenet(event:any){
    
  }
}

