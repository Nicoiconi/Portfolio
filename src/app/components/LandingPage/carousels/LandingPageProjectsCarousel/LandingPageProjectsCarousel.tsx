import { useEffect, useState } from "react"
import styles from "./LandingPageProjectsCarousel.module.css"
import { projects } from "../../../../data/projects"

export default function LandingPageProjectsCarousel() {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // if()
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`${styles.carousel}`}>
      <div className={`${styles.slider}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {
          projects.map((p, index) => (
            <div key={index} className={`${styles.slide}`}>
              <div>
                {p.name}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
