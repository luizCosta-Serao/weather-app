import React from "react";
import axios from "axios"
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  const [location, setLocation] = React.useState(true)
  const [weather, setWeather] = React.useState(true)

  // let getWeather = async (lat, long) => {
  //   let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
  //       lat: lat,
  //       lon: long,
  //       appid: "c044bb94c6c0e2ae39bb05ed600fe6a4",
  //       lang: "pt",
  //       units: "metric"
  //   })
  //   setWeather(res.data)
  //   console.log(`App: ${res.data}`)
  // }

  // React.useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition((position) => {
  //     getWeather(position.coords.latitude, position.coords.longitude);
  //     setLocation(true)
  //   })
  // },[])

  if(location === false) {
    return (
      <>
        <Header/>
        <p>Você precisa habilitar a localização no browser o/</p>
      </>
    )
  } else if (weather === false) {
    return (
      <>
        <Header/>
        Carregando o clima...
      </>
    )
  } else {
    return (
      <>
        <Header/>
        <Home/>
        
      </>
    );
  }
}

export default App;
