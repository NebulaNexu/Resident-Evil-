/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../CautionSite/CautionSite.module.scss';

function CautionSite() {
  return (
    <div className={styles.caution_site}>
      <dl className={styles.dl}>
        <dt>Sobre o RESIDENT EVIL PORTAL</dt>
        <dd>
          <button type="button" className={styles.linkButton}>
            MAIS
          </button>
        </dd>
      </dl>
    </div>
  )
}

export default CautionSite