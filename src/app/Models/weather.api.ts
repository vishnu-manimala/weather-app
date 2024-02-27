export interface location{
    lat: number;
    lon: number;
}
export interface values{
  
        cloudBaseAvg: number;
        cloudBaseMax: number;
        cloudBaseMin:  number;
        cloudCeilingAvg: number;
        cloudCeilingMax: number;
        cloudCeilingMin:  number;
        cloudCoverAvg:  number;
       cloudCoverMax:  number;
        cloudCoverMin:  number;
        dewPointAvg:  number;
        dewPointMax:  number
        dewPointMin: number;
        evapotranspirationAvg: number;
        evapotranspirationMax:  number;
        evapotranspirationMin: number;
        evapotranspirationSum: number;
        freezingRainIntensityAvg:  number;
        freezingRainIntensityMax: number;
        freezingRainIntensityMin:  number;
        humidityAvg:  number;
        humidityMax:  number;
        humidityMin:  number;
        iceAccumulationAvg:  number;
        iceAccumulationLweAvg:  number;
        iceAccumulationLweMax:  number;
        iceAccumulationLweMin:  number;
        iceAccumulationMax: number;
        iceAccumulationLweSum: number;
        iceAccumulationMin: number;
        moonriseTime:string;
        iceAccumulationSum: number;
        moonsetTime: string;
        precipitationProbabilityAvg: number;
        precipitationProbabilityMax: number;
        precipitationProbabilityMin: number;
        pressureSurfaceLevelAvg: number;
        pressureSurfaceLevelMax: number;
        pressureSurfaceLevelMin: number;
        rainAccumulationAvg: number;
        rainAccumulationLweAvg: number;
        rainAccumulationLweMax: number;
        rainAccumulationLweMin: number;
        rainAccumulationMax: number;
        rainAccumulationMin: number;
        rainAccumulationSum: number;
        rainIntensityAvg: number;
        rainIntensityMax: number;
        rainIntensityMin: number;
        sleetAccumulationAvg: number;
        sleetAccumulationLweAvg: number;
        sleetAccumulationLweMax:number;
        sleetAccumulationLweMin: number;
        sleetAccumulationLweSum:number;
        sleetAccumulationMax: number;
        sleetAccumulationMin: number;
        sleetIntensityAvg: number;
        sleetIntensityMax: number;
        sleetIntensityMin: number;
        snowAccumulationAvg: number;
        snowAccumulationLweAvg: number;
        snowAccumulationLweMax: number;
        snowAccumulationLweMin: number;
        snowAccumulationLweSum: number;
        snowAccumulationMax: number;
        snowAccumulationMin: number;
        snowAccumulationSum: number;
        snowDepthAvg: number;
        snowDepthMax: number;
        snowDepthMin: number;
        snowDepthSum:number;
        snowIntensityAvg: number;
        snowIntensityMax: number;
        snowIntensityMin: number;
        sunriseTime: string;
        sunsetTime: string;
        temperatureApparentAvg: number;
        temperatureApparentMax: number;            
        temperatureApparentMin: number;
        temperatureAvg: number;           
        temperatureMax: number;            
        temperatureMin: number;            
        uvHealthConcernAvg: number;        
        uvHealthConcernMax: number;        
        uvHealthConcernMin: number;        
        uvIndexAvg: number;        
        uvIndexMax: number;        
        uvIndexMin: number;        
        visibilityAvg: number;         
        visibilityMax: number;         
        visibilityMin: number;         
        weatherCodeMax: number;           
        weatherCodeMin: number;           
        windDirectionAvg: number;
        windGustAvg: number;           
        windGustMax: number;            
        windGustMin: number;           
        windSpeedAvg: number;           
        windSpeedMax: number;           
        windSpeedMin: number;     
}
export interface daily{
    
        time: string;
        values: values;
}
export interface timeline{
    daily: daily[];
    hourly: daily[];
    minutely:daily[];
}
export interface Weather{
    location:location ;
    timelines: timeline;
}


