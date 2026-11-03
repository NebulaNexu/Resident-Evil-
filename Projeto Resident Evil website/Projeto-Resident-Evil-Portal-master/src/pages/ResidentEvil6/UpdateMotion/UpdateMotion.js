import React from 'react'
import styles from '../UpdateMotion/UpdateMotion.module.scss'

import IMGUpdate from '../../../images/ResidentEvil6/update-joycon.jpg'

function UpdateMotion() {
  return (
    <div className={styles.update}>
      <div className={styles.update_imageWrap}>
        <div className={styles.update_image_overlay}></div>
          <img className={styles.update_image} src={IMGUpdate} alt="" />
      </div>
      <div className={styles.update_descr}>
        <div className={styles.update_descr_inner}>
          <div className={styles.update_lead}>
            Nova atualização adiciona controles por movimento com o Joy-Con™!
          </div>
          <div className={styles.update_detail}>
            Quer ir além dos controles tradicionais? Com esta atualização,
            você pode usar os controles por movimento do Joy-Con™!
            <br>
            </br>
            Mire com uma arma, ataque com a faca, recarregue munição e
            escape dos inimigos sacudindo os controles!
          </div>
          <ul className={styles.additional_content_notesList}>
            <li className={styles.additional_content_notesItem}>
              Observação: estas funções do Joy-Con™ são compatíveis somente
              com os controles acoplados ao suporte para dois controles.
            </li>
            <li className={styles.additional_content_notesItem}>
              A mira com armas também funciona no modo portátil, no
              Nintendo Switch™ Lite, com um Joy-Con™ na horizontal ou
              com o controle Nintendo Switch Pro.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UpdateMotion