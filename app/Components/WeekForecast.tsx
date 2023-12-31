import { WeatherApiResponse } from "../Types/WeatherApiResponse";

type WeekForecastProps = Partial<Pick<WeatherApiResponse, 'forecast'>>

const WeekForecast = ({ forecast }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {forecast?.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <div className="text-white">
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>
              <p>L {day.day.mintemp_c.toFixed()}°</p>
              <p>H {day.day.maxtemp_c.toFixed()}°</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
