import React from "react";
import AddToFavourite from "./addToFavourite";
import WeatherHeadline from "./weatherHeadline";
import WeatherCondition from "./weatherCondition";
import { useWeather } from "../../hooks";

export default function WeatherBoard() {
  const { weatherData, loading, error } = useWeather();
  console.log({ weatherData, loading, error });
  return (
    <section>
      <div className="container">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-6">
            <AddToFavourite />
            <WeatherHeadline />
            <WeatherCondition />
          </div>
        </div>
      </div>
    </section>
  );
}
