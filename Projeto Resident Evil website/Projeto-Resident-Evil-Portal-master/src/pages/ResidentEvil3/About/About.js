/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './About.module.scss'

function Sobre() {
  return (
    <div className={styles.conts_box_about} id="about">
      <h2 className={styles.sec_ttl_about}>SOBRE O JOGO</h2>
        <div className={styles.conts_box_inner_about_story}>
        <h3 className={styles.conts_ttl_about}>
          Descubra a origem deste incidente biológico sem precedentes
          e testemunhe seu desfecho.
        </h3>
        <div className={styles.text_box_about}>
          <p className={styles.lead}>
            Lute para conquistar sua liberdade à beira do desespero
          </p>
          <p>
            Uma série de desaparecimentos misteriosos vem ocorrendo no
            meio-oeste dos Estados Unidos, em uma cidade chamada Raccoon
            City. A unidade especial da polícia conhecida como S.T.A.R.S.
            investiga o caso e descobre que a farmacêutica Umbrella e sua
            arma biológica, o T-Vírus, estão por trás dos incidentes, embora
            vários integrantes da equipe tenham morrido durante a investigação.
            Jill Valentine e os demais sobreviventes dos S.T.A.R.S. tentam
            revelar a verdade, mas descobrem que até a polícia está sob a
            influência da Umbrella e rejeita seus relatos.
          </p>
          <p>
            Logo surgem relatos de um terrível "vírus canibal", e cães
            ferozes passam a vagar pelas ruas. Com a praga se espalhando
            pela cidade e chegando à sua porta, Jill está determinada a
            sobreviver.
          <br>
          </br>
            Sem que Jill saiba, um perseguidor extremamente poderoso já
            foi enviado para eliminá-la.
          </p>
        </div>

        </div>
        <div className={styles.conts_box_inner_about_about}>
          <div className={styles.text_box_about}>
            <p className={styles.lead}>
              Saiba mais sobre o clássico de 1999
            </p>
            <p>
              O jogo original, Resident Evil 3: Nemesis, foi lançado em
              setembro de 1999 e vendeu mais de 3,5 milhões de cópias até
              30 de setembro de 2019.
              <br>
              </br>
              Assim como seu antecessor, Resident Evil 2, o jogo se passa
              em Raccoon City, tomada por uma nova ameaça biológica, e
              retrata o início e o desfecho do incidente.
              <br>
              </br>
              A história acompanha Jill Valentine enquanto ela tenta
              escapar de seu perseguidor, o Nemesis T-Type, e apresenta
              uma nova abordagem ao terror de sobrevivência, explorando
              o medo de ser perseguida sem trégua.
            </p>
            <p>
              Este jogo reimagina Raccoon City mergulhada no caos sob o
              avanço da horda de mortos-vivos, com um nível de detalhes e
              fidelidade possível graças à tecnologia atual.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Sobre