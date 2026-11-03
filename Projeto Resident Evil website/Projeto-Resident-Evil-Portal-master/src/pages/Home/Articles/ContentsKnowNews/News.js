/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Fade from 'react-reveal/Fade';

import styles from './News.module.scss';
import Card1IMG from '../../../../images/Portal/renet-village-ge-en.png'
import Card2IMG from '../../../../images/Portal/renet-reverse-en.png'
import Card3IMG from '../../../../images/Portal/game_eyecatch-221021-01-gl.jpg'
import Card4IMG from '../../../../images/Portal/game_eyecatch-221021-02-gl.jpg'

function Notícias() {
  return (
    <div className={styles.know_news} id="news">
      <div className={styles.inner}>
        <Fade bottom duration={2500}>
          <h3>NOTÍCIAS</h3>
        </Fade>
        <ul className={styles.news_list}>
          <Fade duration={2250}>
          <li className=''>
            <a alt="card1">
              <div className={styles.img_box}>
                <img src={Card1IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  O RE NET oferece suporte aos conteúdos
                  adicionais da Edição Gold! Aproveite
                  ainda mais Resident Evil Village
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  28 out. 2022
                </span>                
                  RE NET            
              </p>
            </a>
          </li>
          </Fade>
          <Fade duration={2500}>
          <li className=''>
            <a alt="card2">
              <div className={styles.img_box}>
                <img src={Card2IMG}alt="" />
              </div>
                <p className={styles.list_text}>                  
                  Use o RE NET para conferir seus
                  resultados e dados de jogo, incluindo
                  informações exclusivas na web!
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  28 out. 2022
                </span>                
                  RE NET             
              </p>
            </a>
          </li>
          </Fade>
          <Fade duration={2750}>
          <li className=''>
            <a alt="card3">
              <div className={styles.img_box}>
                <img src={Card3IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  A demonstração de Resident Evil Village:
                  Edição Gold, com o novo modo em terceira
                  pessoa, já está disponível!
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  21 out. 2022
                </span>                
                  Jogo
              </p>
            </a>
          </li>
          </Fade>
          <Fade duration={3000}>
          <li className=''>
            <a alt="card4">
              <div className={styles.img_box}>
                <img src={Card4IMG} alt="" />
              </div>
                <p className={styles.list_text}>                
                  Resident Evil 4 já está em pré-venda!
                  Confira a edição especial de colecionador,
                  repleta de itens que vão agradar aos fãs!
                </p>
                <p className={styles.list_category}>
                <span className={styles.list_date}>
                  17 out. 2022
                </span>                
                  Jogo
              </p>
            </a>
          </li>
          </Fade>
        </ul>
        <a className={styles.btn} alt="btn">
          MAIS
        </a>
      </div>
    </div>
  )
}

export default Notícias