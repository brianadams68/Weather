import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { WeatherApiResponse } from "../Types/WeatherApiResponse";

type WeatherDetailsProps = Partial<Pick<WeatherApiResponse, 'current' | 'forecast'>>

const WeatherDetails = ({ current, forecast }: WeatherDetailsProps) => {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Weather Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl">Wind Speed</h3>
              <h3 className="text-1xl">{current?.wind_kph} KM/H</h3>
            </div>
            <div>
              <GiWindSlap fontSize={40} />
            </div>
          </div>
        
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl">Humidity</h3>
              <h3 className="text-1xl">{current?.humidity}%</h3>
            </div>
            <div>
              <WiHumidity fontSize={40} />
            </div>
          </div>
        
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl">Wind Direction</h3>
              <h3 className="text-1xl">{current?.wind_dir}</h3>
            </div>
            <div>
              <GiCompass fontSize={40} />
            </div>
          </div>
        
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl">Sunrise</h3>
              <h3 className="text-1xl">
                {forecast?.forecastday[0].astro.sunrise}
              </h3>
            </div>
            <div>
              <BsSunrise fontSize={40} />
            </div>
          </div>
        
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl">Sunsent</h3>
              <h3 className="text-1xl">
                {forecast?.forecastday[0].astro.sunset}
              </h3>
            </div>
            <div>
              <BsSunset fontSize={40} />
            </div>
          </div>
        
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl">Air Pressure</h3>
              <h3 className="text-1xl">{current?.pressure_mb} hPa</h3>
            </div>
            <div>
              <MdAir fontSize={40} />
            </div>
          </div>
        
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl">Feel Like</h3>
              <h3 className="text-1xl">{current?.feelslike_c}°</h3>
            </div>
            <div>
              <CiTempHigh fontSize={40} />
            </div>
          </div>
       
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div>
              <h3 className="text-2xl">Visibility</h3>
              <h3 className="text-1xl">{current?.vis_km} KM</h3>
            </div>
            <div>
              <FaEye fontSize={40} />
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
