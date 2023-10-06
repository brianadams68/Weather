import { getCurrentDate } from "../Utils/currentDate";

const Current = ({ data }) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;

  return (
    <div className="flex flex-col mb-8 md:md-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img src={weatherIcon} alt={data.current.condition.text} />
          </div>
        )}
      </div>
      <p className="text-5xl text-white">
        {data.current.temp_c.toFixed()}
        <span>°</span>
      </p>
    </div>
  );
};

export default Current;
