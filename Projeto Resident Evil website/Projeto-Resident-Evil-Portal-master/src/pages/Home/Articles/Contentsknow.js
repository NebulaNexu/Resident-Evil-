import React from 'react'
import styles from './ContentsKnow.module.scss';
import Sobre from './ContentsKnowAbout/About';
import Notícias from './ContentsKnowNews/News';

function Contentsknow() {
  return (
    <div className={styles.contents_know}>
      <Notícias />
      <Sobre />
    </div>
  )
}

export default Contentsknow