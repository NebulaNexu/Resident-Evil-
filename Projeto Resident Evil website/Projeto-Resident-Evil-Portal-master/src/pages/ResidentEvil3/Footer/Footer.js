/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../Footer/Footer.module.scss'

import IMGPlaystation from '../../../images/Resident3Remake/psf_b.png'
import IMGPs4 from '../../../images/Resident3Remake/ps4_b.png'
import IMGXbox from '../../../images/Resident3Remake/xboxone_b.png'
import IMGSteam from '../../../images/Resident3Remake/steam_b.png'
import IMGSLogoBlack from '../../../images/Resident3Remake/capcom_b.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.title_footer}>
        <ul className={styles.title_footer_platform}>
          <li className={styles.pf_ps}>
            <img src={IMGPlaystation} alt="Playstation" />
          </li>

          <li className={styles.pf_ps4}>
            <img src={IMGPs4} alt="Playstation" />
          </li>

          <li className={styles.pf_xbox}>
            <img src={IMGXbox} alt="Playstation" />
          </li>

          <li className={styles.pf_steam}>
            <img src={IMGSteam} alt="Playstation" />
          </li>
        </ul>

        <ul className={styles.title_footer_platform_copyright}>
          <li>
            "PlayStation" e o logotipo da família "PS" são marcas
            registradas, e "PS4" é uma marca da Sony Interactive Entertainment Inc.
          </li>

          <li>
            © Valve Corporation. Steam e o logotipo Steam são marcas
            comerciais e/ou marcas registradas da Valve Corporation nos
            Estados Unidos e em outros países.
          </li>
        </ul>

        <ul className={styles.title_footer_menu}>
          <li>
            <a>
              Política de privacidade
            </a>
          </li>
        </ul>

        <ul className={styles.title_footer_capcom}>
          <p className={styles.title_footer_capcom_logo}>
            <a href="https://www.capcom.com/">
              <img src={IMGSLogoBlack} alt="Logo Black" />
            </a>
          </p>
          <small className={styles.title_footer_capcom_copyright}>
            ©CAPCOM CO., LTD. 1999, 2020 ALL RIGHTS RESERVED.
          </small>
        </ul> 
      </div>
    </div>
  )
}

export default Footer