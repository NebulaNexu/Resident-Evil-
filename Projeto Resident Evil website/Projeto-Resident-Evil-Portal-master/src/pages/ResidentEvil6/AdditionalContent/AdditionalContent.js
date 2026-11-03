import React from 'react'
import styles from '../AdditionalContent/AdditionalContent.module.scss'

import IMGAdditional from '../../../images/ResidentEvil6/additional-content2.jpg'

function AdditionalContent() {
  return (
    <div className={styles.additional_content}>
      <div className={styles.additional_content_imageWrap}>
        <div className={styles.additional_content_image_overlay}>
        </div>
          <img className={styles.additional_content_image} src={IMGAdditional} alt="" />
      </div>

      <div className={styles.additional_content_descr}>
        <div className={styles.additional_content_descr_inner}>
          <div className={styles.additional_content_lead}>
          Inclui todos os conteúdos adicionais lançados para o modo
          multijogador online e offline.
          </div>
          <div className={styles.additional_content_sublead}>
            -Survivor Mode
            <br>
            </br>
            -Predator Mode
            <br>
            </br>
            -Onslaught Mode
            <br>
            </br>
            -Siege Mode 
            <br>
            </br>
            -Additional Maps
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalContent