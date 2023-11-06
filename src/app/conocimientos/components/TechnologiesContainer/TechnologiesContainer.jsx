import styles from "./TechnologiesContainer.module.css"
import knowledge from "../../../data/knowledge.json"
import Image from "next/image"

export default function TechnologiesContainer() {

  const { languages, technologies } = knowledge

  return (
    <div className="container-fluid">

      <div className={`${styles.knowledgeTechsContainer}`}>
        <div className={`row ${styles.knowledgeTechsContainerHeader}`}>
          Principales lenguajes
        </div>

        <div className={`row ${styles.labelsContainer}`}>
          {
            languages?.main?.map(l => {
              return (
                <div
                  className={`col ${styles.knowledgeTechLogo}`}
                  key={l.name}
                >
                  <Image
                    src={l.image.src}
                    alt={l.image.alt}
                    width={140}
                    height={40}
                  />
                </div>
              )
            })
          }
        </div>
      </div>

      <div className={`${styles.knowledgeTechsContainer}`}>
        <div className={`row ${styles.knowledgeTechsContainerHeader}`}>
          Principales tecnologías
        </div>

        <div className={`row ${styles.labelsContainer}`}>
          {
            technologies?.main?.map(t => {
              return (
                <div
                  className={`col ${styles.knowledgeTechLogo}`}
                  key={t.name}
                >
                  <Image
                    src={t.image.src}
                    alt={t.image.alt}
                    width={140}
                    height={40}
                  />
                </div>
              )
            })
          }
        </div>
      </div>

      <div className={`${styles.knowledgeTechsContainer}`}>
        <div className={`row ${styles.knowledgeTechsContainerHeader}`}>
          Otras tecnologías
        </div>
        <div className={`row ${styles.labelsContainer}`}>
          {
            technologies?.secondary?.map(t => {
              return (
                <div
                  className={`col ${styles.knowledgeTechLogo}`}
                  key={t.name}
                >
                  <Image
                    src={t.image.src}
                    alt={t.image.alt}
                    width={140}
                    height={40}
                  />
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}
