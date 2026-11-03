import React from 'react'
import styles from './Product.module.scss';

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import BgIMG from "../../../images/ResidentEvil4/package2-image-global.jpg";
import PromoLogoIMG from "../../../images/ResidentEvil4/bio-remaster-set2-global.png";
import DownloadIMG from "../../../images/ResidentEvil6/download-artwork-global.jpg";

const Product = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []); 

  return (
    <div id="product" className={styles.product_wrap}>
      <div data-aos="fade" className={styles.product}>
        <div className={styles.product_ttlset}>
          <h3 className={styles.product_ttl}>PRODUTO</h3>
          <h2 className={styles.product_ttl_main}>Nintendo Switch™</h2>
          <ul className={styles.spec_note_list}>
            <li className={styles.spec_note_item}>
              O conteúdo adicional pode variar conforme a plataforma.</li>
          </ul>
        </div>
        <div className={styles.product_package}>
          <div className={styles.product_media_lead}>
              <span>Versão física</span>
          </div>
          <div className={styles.product_flexwrap}>
            <div className={styles.product_descr}>
              <div className={styles.product_lead}>
                A sombra ameaçadora do bioterrorismo se espalha pelo mundo,
                e só você pode detê-la no pacote triplo de Resident Evil!
              </div>
              <div className={styles.product_set_title}>
                  <img src={PromoLogoIMG} alt="Logo Promo" />
              </div>
              <div className={styles.download_product_lead}>
                <div className={styles.download_product_lead_date}>
                  <span className={styles.download_product_lead_date_num}>Disponível</span>
                </div>
              </div>
              <div className={styles.product_package_notes}>
                <p className={styles.product_package_notes_strong}>
                  Este produto inclui um cartão de jogo de Resident Evil 4
                  e códigos para baixar Resident Evil 5 e Resident Evil 6.
                </p>
                <p className={styles.with_indent}>
                  (É necessária uma conexão com a internet e uma Conta
                  Nintendo para baixar os jogos.)
                </p>
              </div>
            </div>
            <div className={styles.product_image}>
              <img src={BgIMG} alt="" />
            </div>
          </div>
          <div className={styles.trialVersion}>
            <div className={styles.trialVersion_ttl_wrap}>
              <h3 className={styles.trialVersion_ttl}>
								Nintendo Switch™ Trial Version Now Available!
              </h3>
              <h4 className={styles.trialVersion_special}>
								Vantagens de comprar o jogo após a demonstração!
              </h4>
            </div>
            <div className={styles.trialVerison_detail}>
              Jogue o capítulo 1-1: Posto de Controle Civil nesta demonstração
              para download disponível na Nintendo eShop. Ao comprar o jogo,
              você poderá transferir os dados da demonstração e continuar da
              fase seguinte, mantendo sua classificação, tempo, registros e
              conteúdo da biblioteca. Também é possível transferir itens como
              armas, munição, ervas e dinheiro, respeitando os limites máximos.
              Além disso, você desbloqueia o traje EX "Safari" de Chris para
              aproveitar o jogo com um novo visual.
            </div>
          </div>
        </div>
        <div className={styles.product_download}>
          <div className={styles.product_media_lead}>
            <span>Versão digital</span>
          </div>
          <div className={styles.product_flex_wrap}>
            <div className={styles.product_image_download}>
              <img src={DownloadIMG} alt="" />
            </div>
            <div className={styles.product_descr}>
              <a className={styles.product_btn} href="https://www.nintendo.com/games/detail/resident-evil-0-switch"
                target="blank">
                <span>Comprar</span>
              </a>
              <ul className={styles.product_notes}>
              </ul>
            </div>
          </div>
          <div className={styles.trialVersion}>
            <div className={styles.trialVersion_ttl_wrap}>
              <h3 className={styles.trialVersion_ttl}>
								Nintendo Switch™ Trial Version Now Available!
              </h3>
              <h4 className={styles.trialVersion_special}>
								Vantagens de comprar o jogo após a demonstração!
              </h4>
            </div>
            <div className={styles.trialVerison_detail}>
              Jogue o capítulo 1-1: Posto de Controle Civil nesta demonstração
              para download disponível na Nintendo eShop. Ao comprar o jogo,
              você poderá transferir os dados da demonstração e continuar da
              fase seguinte, mantendo sua classificação, tempo, registros e
              conteúdo da biblioteca. Também é possível transferir itens como
              armas, munição, ervas e dinheiro, respeitando os limites máximos.
              Além disso, você desbloqueia o traje EX "Safari" de Chris para
              aproveitar o jogo com um novo visual.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;