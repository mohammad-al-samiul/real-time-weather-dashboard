import { useState } from "react";
import { useEffect } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    status: "",
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (longitude, latitude) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Fething Weather Data...",
      });
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_API
        }/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );

      if (!response.ok) {
        throw new Error("Failed to Fetch Weather Data");
      }
      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude,
        latitude,
      };
      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      status: true,
      message: "Fetching Weather Data...",
    });

    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeatherData(position.coords.longitude, position.coords.latitude);
    });
  }, []);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
