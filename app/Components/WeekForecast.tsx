interface DayForescast {
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

interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForescast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <p className="text-white">
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>
              <p>L {day.day.mintemp_c.toFixed()}°</p>
              <p>H {day.day.maxtemp_c.toFixed()}°</p>
            </div>
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
