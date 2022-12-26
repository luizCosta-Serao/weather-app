import React from 'react'
import styles from "./Home.module.css"
import axios from "axios"
import TempoAgora from './TempoAgora'
import NoticiaDestaque from './NoticiaDestaque'

const Home = () => {
  //Conversão de horas unix, UTC em hora local
  /*
  var d = new Date(timestamp); // timestamp é o valor em hora unix
  var localTime = d.getTime() + (d.getTimezoneOffset() * 60000);
  var localDate = new Date(localTime);
  */ 

  return (
    <section className={`container ${styles.section}`}>
      <TempoAgora/>
      <NoticiaDestaque/>
    </section>
  )
}

export default Home