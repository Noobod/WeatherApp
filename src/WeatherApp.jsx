import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    city: "Parramatta",
    feelslike: 14.41,
    temp: 15.07,
    tempMax: 16.04,
    tempMin: 13.32,
    humidity: 68,
    weather: "overcast clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Kapil</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}