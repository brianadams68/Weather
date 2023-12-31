"use client";
import React, { useState } from "react";
import Input from "./Components/Input";
import Current from "./Components/Current";
import WeatherDetails from "./Components/WeatherDetails";
import WeekForecast from "./Components/WeekForecast";
import { WeatherApiResponse }  from "./Types/WeatherApiResponse";

 


const Home = () => {
  const [data, setData] = useState<WeatherApiResponse | undefined>(undefined);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");


  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_APP}&q=${location}&days=7&aqi=yes&alerts=yes`;
  console.log(data);
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data: WeatherApiResponse = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData(undefined);
      }
    }
  };

  let content;
  if (data && Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5-rem]">
        <h2 className="text-3xl font-bold mb-4">Welcome to the weather app</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5-rem]">
        <p className="text-3xl font-bold mb-4">City Not Found</p>
        <p className="text-xl">Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current current={data?.current} location={data?.location}/>
          <WeekForecast forecast={data?.forecast} />
        </div>
        <div>
          <WeatherDetails current={data?.current} forecast={data?.forecast} />
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="bg-white/25 w-full flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
            Weather App.
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;
