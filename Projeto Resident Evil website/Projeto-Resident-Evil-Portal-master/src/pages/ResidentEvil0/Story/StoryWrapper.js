import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/Resident0/system1.jpg"
import HistoryIMG from "../../../images/Resident0/story3.jpg"

const StoryWrapper = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);
  
  return (
    <div className={styles.system_story_wrapper} id="story">
        <div className={styles.system}>
          <div data-aos="fade-right" className={styles.system_image}>
                <img src={SystemIMG} alt="System 1" />
              <div className={styles.system_image_overlay}></div>                
          </div>
          <div data-aos="fade" className={styles.system_descr}>
            <div className={styles.system_descr_bg}></div>
              <div className={styles.system_descr_inner}>
              <h3 className={styles.system_lead}>
                Descubra o destino da equipe Bravo dos S.T.A.R.S.,
                antes dos acontecimentos de Resident Evil.
              </h3>
              <div  className={styles.system_detail}>
                RE0 conta o que aconteceu a bordo do Ecliptic Express,
                antes do Incidente da Mansão retratado em RE1. Este
                prelúdio ambicioso trouxe mecânicas inéditas para a série,
                incluindo o sistema de troca de parceiros, que permite
                alternar entre os dois protagonistas a qualquer momento.
              <br>
              </br>
              <br>
              </br>
                O Modo Wesker* permite jogar de uma maneira totalmente
                nova, com o antagonista Albert Wesker como personagem
                jogável e seus poderes sobre-humanos.
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
                    Em 1998, o Departamento de Polícia de Raccoon City enviou
                    sua equipe de elite S.T.A.R.S. Bravo para investigar uma
                    série de assassinatos bizarros nos arredores da cidade.
                  <br>
                  </br>
                  <br>
                  </br>
                    Durante o trajeto, uma falha no motor força o helicóptero
                    da equipe a fazer um pouso de emergência. Ao deixar o local
                    da queda, o grupo encontra um veículo militar capotado,
                    soldados mortos e ordens para transportar Billy Coen, um
                    prisioneiro condenado à morte.
                  <br>
                  </br>
                  <br>
                  </br>
                    Enquanto a equipe continua a busca, a novata Rebecca
                    Chambers encontra um trem de passageiros. Sem ver sinais
                    de vida, ela embarca...
                </div>
              </div>            
          </div>
        </div>
    </div>
  )
}

export default StoryWrapper;