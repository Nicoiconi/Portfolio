import { useCallback, useEffect, useState } from 'react'
import styles from "./CarouselProjectImages.module.css"
import Image from 'next/image'

export default function CarouselProjectImages({ images, name }) {

  const [currentSlide, setCurrentSlide] = useState(0)

  function showSlide(slideIndex) {
    setCurrentSlide(slideIndex)
  }

  const nextSlide = useCallback(() => {
    showSlide((currentSlide + 1) % images?.length)
  }, [currentSlide, images])

  const previousSlide = useCallback(() => {
    showSlide((currentSlide - 1 + images?.length) % images?.length)
  }, [currentSlide, images])

  function handlePreviousSlide() {
    previousSlide()
  }

  function handleNextSlide() {
    nextSlide()
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);



  return (
    <div className={`${styles.buttonsCarouselContainer}`}>
      <button
        className={`${styles.carouselButton} ${styles.previousButton}`}
        onClick={() => handlePreviousSlide()}
      >
        &#8656;
      </button>

      <div className={`col ${styles.imagesContainer}`}>
        {
          images?.map((i, iIndex) => {
            return (
              <div
                key={`${i?.alt}-${iIndex}`}
                className={`${styles.carouselSlide} ${iIndex === currentSlide ? styles.active : styles.nonActive}`}
              >
                <Image
                  className={
                    name === "H-Buy"
                      ? `${styles.projectImageHbuy}`
                      : name === "Wordle Game"
                        ? `${styles.projectImageWordle}`
                        : ""
                  }
                  src={i?.src}
                  alt={i?.src}
                  height={165}
                  width={320}
                />
              </div>
            )
          })
        }
      </div>

      <button
        className={`${styles.carouselButton} ${styles.nextButton}`}
        onClick={() => handleNextSlide()}
      >
        &#8658;
      </button>
    </div>
  )
}
