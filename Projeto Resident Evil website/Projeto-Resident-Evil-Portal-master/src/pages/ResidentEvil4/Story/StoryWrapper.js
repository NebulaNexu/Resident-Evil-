import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/ResidentEvil4/system2.jpg"
import HistoryIMG from "../../../images/ResidentEvil4/story1.jpg"

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
                Viva uma nova era do terror de sobrevivência
              </h3>
              <div  className={styles.system_detail}>
                Acompanhe Leon S. Kennedy enquanto ele desvenda a
                transformação sombria de um vilarejo europeu durante a
                busca pela filha sequestrada do presidente. Resident Evil 4
                introduziu a câmera sobre o ombro e mecânicas de ação
                responsivas que influenciaram não só os jogos seguintes da
                série, mas todo o gênero de terror de sobrevivência.
              <br>
              </br>
              <br>
              </br>
                Uma obra-prima do terror de sobrevivência e da ação, este
                jogo continua tão divertido quanto no lançamento. Esta
                versão também inclui Separate Ways, cenário adicional
                presente nos relançamentos em HD do jogo original.
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
                    Após o desastre sem precedentes do Incidente de Raccoon
                    City, a Umbrella Corporation entrou em colapso diante da
                    indignação pública e da intervenção do governo. Leon S.
                    Kennedy sobreviveu à queda da cidade e agora atua como
                    agente especial a serviço do presidente dos Estados Unidos.
                  <br>
                  </br>
                  <br>
                  </br>
                    Quando a filha do presidente é sequestrada, Leon segue
                    relatos de testemunhas até um pequeno vilarejo europeu
                    para encontrá-la. Nem os horrores de Raccoon City poderiam
                    prepará-lo para os segredos que descobriria...
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