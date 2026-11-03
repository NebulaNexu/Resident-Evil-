import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/ResidentEvil6/system1.jpg"
import HistoryIMG from "../../../images/ResidentEvil6/story1.jpg"

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
                Quatro personagens, um destino
              </h3>
              <div  className={styles.system_detail}>
                Resident Evil 6 foi lançado originalmente em outubro de
                2012. Com quatro histórias distintas, mas interligadas,
                o jogo coloca os personagens diante de uma ameaça
                bioterrorista de escala global. Também foi o primeiro
                Resident Evil a reunir Chris Redfield e Leon S. Kennedy
                no mesmo título.
              <br>
              </br>
                Assim como os destinos dos personagens se cruzam, os
                jogadores também podem se encontrar em partidas cooperativas
                online para até quatro pessoas, mudando para sempre o
                multiplayer da série. Também é possível jogar em cooperação
                offline. Só não acorde os vizinhos.
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
                    Mais de quinze anos após a destruição de Raccoon City...
                    Diante da ameaça contínua do bioterrorismo, o presidente
                    dos Estados Unidos decide revelar a verdade sobre os
                    últimos dias da cidade. No dia do discurso, um ataque
                    bioterrorista atinge o local e a verdade mergulha na
                    escuridão.
                  <br>
                  </br>
                    Mas a luta ainda não acabou. Em Tall Oaks, nos Estados
                    Unidos, Leon S. Kennedy, acusado pelo assassinato do
                    presidente, tenta salvar a população da ameaça zumbi.
                    Em Lianshiang, Chris Redfield enfrenta uma crise
                    bioterrorista. Na República de Edonia, devastada pela
                    guerra civil, Jake é perseguido por algo desumano. E
                    por trás de tudo está Ada, mas ninguém sabe com que
                    objetivo.
                  <br>
                  </br>
                     Esta é a história de suas lutas, vitórias e derrotas
                     em escala global.
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