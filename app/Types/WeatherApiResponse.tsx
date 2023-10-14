export interface WeatherApiResponse {
  current: {
    wind_kph: number;
    humidity: number;
    wind_dir: string;
    pressure_mb: number;
    feelslike_c: number;
    vis_km: number;
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
  }, 
  forecast: {
    forecastday: {
      date: string;
      day: {
      condition: {
        icon: string;
        text: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
  },
      astro: {
        sunrise: string;
        sunset: string;
      };
    }[];
  },
  location: {
    name: string;
    region: string;
  };
};