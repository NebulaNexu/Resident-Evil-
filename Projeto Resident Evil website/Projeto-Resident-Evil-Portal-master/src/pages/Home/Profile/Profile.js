/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

import styles from '../Profile/Profile.module.scss';

function Profile() {

  return (
    <div className={styles.contents}>
      <section className={styles.contents_profile}>
        <div className={styles.inner}>
          <h2>MEU PERFIL</h2>
            <p className={styles.contents_profile_text}>
              Aproveite ao máximo sua experiência
              personalizando sua página de perfil!
            </p>
            <button type="button" className={styles.btn}>
              MEU PERFIL
            </button>
        </div>
      </section>
    </div>
  )
}

export default Profile;