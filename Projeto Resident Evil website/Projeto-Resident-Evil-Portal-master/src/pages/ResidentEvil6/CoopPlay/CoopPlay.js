import React from 'react'
import styles from '../CoopPlay/CoopPlay.module.scss'

import IMGCoopPlay from '../../../images/ResidentEvil6/coopplay-image6.jpg'

function CoopPlay() {
  return (
    <div className={styles.coopPlay}>
      <div className={styles.coopPlay_imageWrap}>
        <div className={styles.coopPlay_image_overlay}>
          <img  className={styles.coopPlay_image} src={IMGCoopPlay} alt="" />
        </div>
      </div>

      <div className={styles.coopPlay_descr}>
        <div className={styles.coopPlay_descr_inner}>
          <div className={styles.coopPlay_lead}>Jogue em equipe no modo cooperativo!</div>
          <div className={styles.coopPlay_detail}>
            Na versão digital para Nintendo Switch™, forme dupla no modo
            cooperativo online pelo Nintendo Switch™ Online! Também é
            possível jogar em tela dividida usando uma conexão local.
            Experimente diferentes formas de jogar, como usar dois consoles
            ou compartilhar os controles Joy-Con™ entre duas pessoas!
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoopPlay