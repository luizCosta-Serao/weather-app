import React from 'react'
import styles from "./Header.module.css"
import sunCloud from "../../imgs/ceu-limpo.svg"

const Header = () => {
  const [weather, setWeather] = React.useState(false)
  const date = new Date()
  const day = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

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
    <header className={styles.header}>
        <div className={styles.mainMenu}>
          <div className={`container ${styles.layout}`}>
            <a className={styles.logo} href='https://www.google.com.br'>TempoAqui</a>
            <input type="text" name='cidade' id='cidade' placeholder='Busque por uma cidade'/>
          </div>
        </div>

        <div className={styles.submenu}>
          <div className={`container ${styles.layout}`}>
            <p className={styles.title}>{day[date.getDay()]}, {month[date.getMonth()]} de {date.getFullYear()}</p>
            <p className={styles.tempoAgora}><img src={sunCloud} alt="ceu limpo"/> {weather.name}, {weather.sys.country} / {Math.round(weather.main.temp) }°C</p>
          </div>
        </div>
    </header>
  )
}

export default Header