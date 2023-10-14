import { getCurrentDate } from "../Utils/currentDate";
import { ImLocation2 } from "react-icons/im";
import { WeatherApiResponse } from "../Types/WeatherApiResponse";

type CurrentProps =  Partial<Pick<WeatherApiResponse, 'current' | 'location'>>

const Current = ({ current, location }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const weatherIcon = current?.condition.icon;

  return (
    <div className="flex flex-col mb-8 md:md-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              className="w-[50px] object-cover"
              src={weatherIcon}
              alt={current.condition.text}
            />
          </div>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {current?.temp_c.toFixed()}
          <span>°</span>
        </p>
        <span className="text-white">{current?.condition.text}</span>
      </div>
      <div>
        <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
          <ImLocation2 />
          <span>
            {location?.name}, {location?.region}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Current;
