import React from 'react'
import styles from "./NoticiaDestaque.module.css"
import imagemNoticia from "../../imgs/img-noticia.png"

const NoticiaDestaque = () => {
  return (
    <div className={styles.noticiaDestaque}>
        <img src={imagemNoticia} alt="Imagem da notícia"/>
        <div className={styles.textoNoticia}>
          <h1>Previsão para o natal e reveillon</h1>
          <p>Saiba como a ZACS, uma frente fria intensa E e La Nina causaram a chuva volumosa em vários estados</p>
          <a href='https://www.google.com'>Saiba Mais</a>
        </div>
      </div>
  )
}

export default NoticiaDestaque