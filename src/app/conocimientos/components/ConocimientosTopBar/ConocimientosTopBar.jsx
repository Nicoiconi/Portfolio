'use client'

import { useKnowledge } from "../../../hooks/useKnowledge"
import styles from "./ConocimientosTopBar.module.css"


export default function ConocimientosTopBar() {

  const { knowledgeToShow, setKnowledgeToShow } = useKnowledge()

  function handleKnowledge(e) {
    const { name } = e.currentTarget;
    setKnowledgeToShow(name);
  }

  return (
    <div className={`container-fluid ${styles.knowledgeBar}`}>

      <div className="row">

        <div className={`col ${styles.knowledgeTopBar}`}>
          <div>
            <button
              name="languages-technologies"
              className={
                knowledgeToShow === "languages-technologies"
                  ? `${styles.botonKnowledge} ${styles.botonKnowledgePresionado}`
                  : `${styles.botonKnowledge} `
              }
              onClick={(e) => handleKnowledge(e)}
            >
              Lenguajes y Tecnologías
            </button>
          </div>
        </div>

        <div className={`col ${styles.knowledgeTopBar}`}>
          <div>
            <button
              name="mern-stack"
              className={
                knowledgeToShow === "mern-stack"
                  ? `${styles.botonKnowledge} ${styles.botonKnowledgePresionado}`
                  : `${styles.botonKnowledge} `
              }
              onClick={(e) => handleKnowledge(e)}
            >
              Stack MERN
            </button>
          </div>
        </div>

      </div >

    </div >
  )
}
