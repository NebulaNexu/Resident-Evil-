import React from 'react'
import styles from './Product.module.scss';

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import BgIMG from "../../../images/ResidentEvil4/package2-image-global.jpg";
import PromoLogoIMG from "../../../images/ResidentEvil4/bio-remaster-set2-global.png";
import DownloadIMG from "../../../images/ResidentEvil4/download-global.jpg";

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
                <li className={styles.product_notes_item}>
                  (Disponível somente para download)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;