import React from 'react'
import styles from "./TempoAgora.module.css"
import ceuLimpo from "../../imgs/ceu-limpo.svg"
import nuvem from "../../imgs/nuvem.svg"
import sensacao from "../../imgs/sensacao.svg"

const TempoAgora = () => {
  const [weather, setWeather] = React.useState(false)

  let getWeather = async (lat, lon, apiKey) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt&units=metric`)
    const data = await response.json();
    console.log(data)
    setWeather(data)
  }

  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.altitude)
      getWeather(position.coords.latitude, position.coords.longitude, "5d1b6415c11271ea74b16f6a549f1308");
    })
  },[]) 

  return (
    <div className={styles.tempoAgora}>
        <h1 className={styles.title}>Tempo agora em <br/> {weather.name}/{weather.sys.country}</h1>
        <p><img src={ceuLimpo} alt='imagem do tempo'/>{Math.round(weather.main.temp)}°C</p>
        <div className={styles.nuvemSensacao}>
          <p className={styles.nuvem}><img src={nuvem} alt='nuvem'/>{weather.weather[0].description}</p>
          <p className={styles.sensacao}><img src={sensacao} alt='sensação'/>Sensação: {Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className={styles.vento}>
          <h3>Vento</h3>
          <p>{weather.wind.speed} m/s</p>
        </div>
        <div className={styles.umidade}>
          <h3>Umidade</h3>
          <p>{weather.main.humidity}%</p>
        </div>
      </div>
  )
}

export default TempoAgora