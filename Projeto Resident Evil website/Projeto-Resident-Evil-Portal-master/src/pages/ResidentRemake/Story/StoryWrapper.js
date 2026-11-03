import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/ResidentRemake/system1.jpg"
import HistoryIMG from "../../../images/ResidentRemake/story1.jpg"

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
                A experiência original de terror de sobrevivência
              </h3>
              <div  className={styles.system_detail}>
                Conheça a remasterização de excelência que trouxe de volta
                o clássico de terror de 1996. A versão de 2002 recriou
                cenários e personagens em HD e aprimorou as interpretações
                de voz, tornando a história original ainda mais aterrorizante.
                O sucesso do lançamento consolidou o jogo como uma obra-prima
                do terror de sobrevivência.
              <br>
              </br>
              <br>
              </br>
                Esta remasterização em HD mantém os momentos arrepiantes e
                a tensão claustrofóbica do lançamento original, além de
                incluir os vídeos Wesker's Report e Wesker's Report II.
                Explore como nunca os mistérios da mansão abandonada e lute
                para sobreviver aos pesadelos que percorrem seus corredores.
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
                <h3 className={styles.story_lead}>Sobreviva ao horror</h3>
                <div className={styles.story_detail}>
                    Em 1998, o Departamento de Polícia de Raccoon City enviou
                    sua equipe de elite S.T.A.R.S. Bravo para investigar uma
                    série de assassinatos bizarros nos arredores da cidade.
                  <br>
                  </br>
                  <br>
                  </br>
                    Quando a equipe Bravo desaparece, a equipe Alpha dos
                    S.T.A.R.S. parte para investigar a floresta onde ela foi
                    vista pela última vez. Lá, encontra os destroços do
                    helicóptero e o corpo do piloto.
                  <br>
                  </br>
                  <br>
                  </br>
                    Chris Redfield conduz a equipe Alpha floresta adentro,
                    mas o grupo é emboscado por cães mortos-vivos. A equipe
                    foge para uma mansão próxima, sem imaginar os horrores
                    que a aguardam...
                </div>
              </div>            
          </div>
        </div>
    </div>
  )
}

export default StoryWrapper;