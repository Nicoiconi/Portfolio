import { useEffect, useState } from "react";
import styles from "./LandingPageTechCarousel.module.css"
import knowledge from "../../../../data/knowledge.json"
import Image from "next/image";

export default function LandingPageTechCarousel() {

  const { technologies } = knowledge

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.main.length);
    }, 3000);

    return () => clearInterval(interval)
  }, [technologies.main.length])

  return (
    <div className={`${styles.carousel} `}>
      <div className={`${styles.slider}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {
          technologies.main.map((t, index) => (
            <div key={index} className={`${styles.slide}`}>
              <div>
                <Image
                  width={80}
                  height={30}
                  src={t.image.src}
                  alt={t.image.alt}
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
