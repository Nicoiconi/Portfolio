import styles from "./MernStackContainer.module.css"

import knowledge from "../../../data/knowledge.json"
import Image from "next/image"


export default function MernStackContainer() {

  const { mernStack } = knowledge
  const { introduction, technologies } = mernStack

  return (
    <div className={`${styles.mernKnowledge}`}>
      <div
        className={`row ${styles.mernIntro}`}
      >
        {introduction}
      </div>
      {
        technologies?.map((t, tIndex) => {
          return (
            <div
              key={tIndex}
              className={`row ${styles.mernTechRow}`}
            >
              <div className={`col-md-3 py-2 ${styles.technologyNameMernStack}`}>
                <Image
                  // className={`${styles.technologyImgMernStack}`}
                  src={t.image.src}
                  alt={t.image.alt}
                  width={150}
                  height={40}
                />
              </div>

              <div className={`col ${styles.technologyDescriptionMernStack}`}>
                {t?.description}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
