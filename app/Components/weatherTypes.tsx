export interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
  };
}

export interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
}

export interface WeatherDetailsProps {
  data: {
    current: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

export interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location: {
      name: string;
      region: string;
    };
  };
}

export type weatherTypes = WeekForecastProps &
  WeatherDetailsProps &
  CurrentProps;
