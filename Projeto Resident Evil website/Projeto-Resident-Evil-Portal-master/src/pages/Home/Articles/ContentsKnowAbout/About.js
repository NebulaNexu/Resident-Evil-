/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './About.module.scss';
import Fade from 'react-reveal/Fade';

function Sobre() {
  return (
    <div className={styles.know_about} id="about">
      <div className={styles.inner}>        
          <div className={styles.about_left}>
            <Fade bottom duration={2200}>
              <h3>HISTÓRIA</h3>
            </Fade>
            <Fade bottom duration={2400}>
            <p>            
              A Capcom lançou Resident Evil em 1996
              <br>
              </br>           
              e definiu para sempre o gênero de terror de sobrevivência.
            </p>
            </Fade>
            <Fade bottom duration={2900}>
              <a className={styles.btn} alt="btn">Mais</a>
            </Fade>
          </div>        
      </div>
    </div>
  )
}

export default Sobre