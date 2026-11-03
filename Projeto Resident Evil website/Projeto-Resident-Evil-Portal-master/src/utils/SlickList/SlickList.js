/* eslint-disable jsx-a11y/anchor-is-valid */

import { Swiper, SwiperSlide, } from "swiper/react/swiper-react.js";
import { Scrollbar, Pagination } from 'swiper';

import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import Fade from 'react-reveal/Fade';

import styles from '../SlickList/SlickList.module.scss'

import IMG from '../../images/Resident3Remake/collectors_thumb_us.jpg'
import IMG2 from '../../images/Resident3Remake/news-220303.jpg'
import IMG3 from '../../images/Resident3Remake/news-220603.jpg'
import IMG4 from '../../images/Resident3Remake/news200805-dlcall.jpg'
import IMG5 from '../../images/Resident3Remake/classic_thumb.jpg'
import IMG6 from '../../images/Resident3Remake/demo_thumb.jpg'
import IMG7 from '../../images/Resident3Remake/map_thumb.jpg'


export default function SlickList () {
  return (
    <div className={styles.container} id="news">
      <Swiper
      modules={[ Scrollbar, Pagination ]}
        navigation={true}
        keyboard={true}
        spaceBetween={20}
        loop={true}
        slidesPerView={3}
        centeredSlides={false}
        pagination={true}
        slidesPerGroupSkip={3}
        grabCursor={true}
        controlsProps={{
          dotsTouchable: true,
          dotsWrapperStyle: { width: 20, height: 10 },
          }}

        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1705: {
            width: 1705,
            slidesPerView: 3.5,
          }
        }}
        className={styles.myswiper}
      >
      <Fade duration={2200}>
        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG} alt="" />
            <div className={styles.text}>
              <p>Edição de colecionador de Resident Evil 3</p>
            </div>
          </a>          
        </SwiperSlide>        

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG2} alt="" />
            <div className={styles.text}>
              <p>Três títulos aclamados chegam aos consoles da nova geração
              com melhorias!</p>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG3} alt="" />
            <div className={styles.text}>
              <p>Resident Evil 4 foi recriado com jogabilidade modernizada,
              uma nova abordagem para a história e gráficos muito detalhados.</p>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG4} alt="" />
            <div className={styles.text}>
              <p>As recompensas do jogo desbloqueiam conteúdo adicional para
              a campanha de Resident Evil 3, disponível para compra em 6 de agosto!</p>
            </div>
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG5} alt="" />
            <div className={styles.text}>
              <p>O pacote de trajes clássicos já está disponível, com visuais
              inspirados em Resident Evil 3: Nemesis!</p>
            </div>
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG6} alt="" />
            <div className={styles.text}>
              <p>Versão de demonstração disponível!</p>
            </div>
          </a>        
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
          <a>
            <img src={IMG7} alt="" />
            <div className={styles.text}>
              <p>Saiba mais sobre os acontecimentos em Raccoon City,
              cenário de Resident Evil 3.</p>
            </div>
          </a>        
        </SwiperSlide>
      </Fade>
      </Swiper>
    </div>
  )
}