import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/ResidentEvil5/system1.jpg"
import HistoryIMG from "../../../images/ResidentEvil5/story1.jpg"

function StoryWrapper() {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);
  
  return (
    <div className={styles.system_story_wrapper}>
        <div className={styles.system}>
          <div data-aos="fade-right" className={styles.system_image}>
                <img src={SystemIMG} alt="System 1" />
              <div className={styles.system_image_overlay}></div>                
          </div>
          <div data-aos="fade" className={styles.system_descr}>
            <div className={styles.system_descr_bg}></div>
              <div className={styles.system_descr_inner}>
              <h3 className={styles.system_lead}>                
                O medo nunca envelhece
              </h3>
              <div  className={styles.system_detail}>
                Resident Evil 5 foi lançado em 2009. Dez anos se passaram
                desde que Chris Redfield enfrentou o medo pela primeira vez
                em uma antiga mansão de Raccoon City. Agora, em uma região
                escaldante e distante de casa, o agente precisa eliminar
                uma nova ameaça e um velho inimigo: Albert Wesker.
                Atravesse cenários de luz ofuscante e escuridão impenetrável
                no primeiro Resident Evil a levar o horror à luz do dia.
                Com cooperação online ou local, você não precisa enfrentar
                o medo sozinho.
              <br>
              </br>
              <br>
              </br>
                Conheça Sheva Alomar, uma nova e poderosa aliada. Juntos,
                ela e Chris enfrentarão um inimigo extraordinário e
                descobrirão o que é mais forte: o medo ou a confiança
                que têm um no outro.
              </div>
            </div>
          </div>            
        </div>
        <div className={styles.story}>
          <div data-aos="fade-right" className={styles.story_image}>
            <img src={HistoryIMG} alt="History" />
          </div>
          <div data-aos="fade" className={styles.story_descr}>
            <div className={styles.story_descr_bg}></div>
              <div className={styles.story_descr_inner}>
                <h3 className={styles.story_lead}>HISTÓRIA</h3>
                <div className={styles.story_detail}>
                    Dez anos atrás, a Umbrella Corporation lançou sobre
                    Raccoon City uma ameaça biológica sem precedentes.
                    Chris Redfield, um dos poucos sobreviventes, agora é
                    agente da Aliança de Avaliação de Segurança contra
                    Bioterrorismo (BSAA). Sua missão é ir à Zona Autônoma
                    de Kijuju, em um país africano não identificado, e
                    capturar um traficante de armas biológicas. Chris não
                    imaginava que uma força ainda mais sombria estava em
                    ação, com um rosto que lhe era familiar...
                  <br>
                  </br>
                </div>
              </div>            
          </div>
        </div>
    </div>
  )
}

export default StoryWrapper;