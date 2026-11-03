/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from '../EnjoyAmbassador/EnjoyAmbassador.module.scss';
import CardIMG from '../../../../../images/Portal/card-sample-en.png';

function EnjoyAmbassador() {
  return (
    <div className={styles.enjoy_ambassador} id="ambassador">
      <div className={styles.inner}>
        <Fade bottom duration={2400}>
          <div className={styles.ambassador_left}>
            <h3>
              EMBAIXADOR
              <span>Programa de embaixadores de Resident Evil</span>
            </h3>
            <p>
              Compartilhe sua paixão por Resident Evil
              com fãs de todo o mundo!
            </p>
            <button type="button" className={styles.btn}>
              MAIS
            </button>
          </div> 
        </Fade>

        <Fade duration={2800}>
          <a className={styles.ambassador_card}>
            <p>
              Quem compartilha suas experiências
              positivas on-line pode ter acesso a
              conteúdos e oportunidades especiais.
            </p>
            <span>
              <img src={CardIMG} alt="Img Card" />
            </span>
          </a>
        </Fade>
      </div>
    </div>
  )
}

export default EnjoyAmbassador