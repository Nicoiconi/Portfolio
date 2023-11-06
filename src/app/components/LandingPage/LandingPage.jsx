'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef, useState } from "react"
import Link from "next/link"
import styles from "./LandingPage.module.css"
import { IconMailOpenedFilled, IconMailFilled, IconClipboardCheck } from "@tabler/icons-react";
import { montserrat } from '../../fonts'
import personal_data from "../../data/personal-data.json"
import LandingPageProjectsCarousel from './carousels/LandingPageProjectsCarousel/LandingPageProjectsCarousel';
import LandingPageTechCarousel from './carousels/LandingPageTechCarousel/LandingPageTechCarousel';

export default function LandingPage() {

  const { welcome, introduction, end, invitation, email } = personal_data

  const [showGmailLabel, setShowGmailLabel] = useState(false)
  const [copiado, setCopiado] = useState(false);
  const emailLabel = useRef(null)

  function enableShowGmailLabel() {
    setShowGmailLabel(!showGmailLabel)
  }

  const copyData = async () => {
    if (emailLabel.current) {
      const contenido = emailLabel.current.textContent;
      if (contenido) {
        try {
          await navigator.clipboard.writeText(contenido);
          setCopiado(true);

          setTimeout(() => {
            setCopiado(false);
          }, 2000);

          console.log('Text copied to clipboard successfully');
        } catch (err) {
          console.error('Unable to copy text to clipboard', err);
        }
      }
    }
  };
  return (
    <div className={`${montserrat.className} container-fluid ${styles.landingIntro}`}>

      <div className={`row ${styles.dataCarousels}`}>

        <div className={`col-10 col-lg-5 ${styles.leftColumn}`}>
          <div className={`container ${styles.textIntro}`}>
            {welcome}
          </div>
          <div className={`container ${styles.textIntro}`}>
            {introduction}
          </div>

          <div className={`container`}>
            <div className={`${styles.textIntro}`}>
              {end}
            </div>
            <div className={`row ${styles.emailRow} ${showGmailLabel ? styles.emailRowActive : ""} ${copiado ? styles.emailCopiado : ''}`}>
              <div className={`${styles.emailCol}`}>
                {
                  showGmailLabel
                    ? <IconMailOpenedFilled
                      width="45"
                      height="40"
                      className={styles.gmailIconActive}
                      onClick={enableShowGmailLabel}
                    />
                    : <IconMailFilled
                      width="45"
                      height="40"
                      className={styles.gmailIcon}
                      onClick={enableShowGmailLabel}
                    />
                }
              </div>
              <div className={` ${styles.emailCol}`}>
                <div
                  onClick={copyData}
                  className={
                    showGmailLabel
                      ? ``
                      : "d-none"
                  }
                >

                  {
                    copiado
                      ? <div
                        className={`${styles.gmailLabel} d-none d-sm-block`}
                      >
                        Copiado!!
                      </div>
                      : <div
                        className={`${styles.gmailLabel} d-none d-sm-block`}
                        ref={emailLabel}
                      >
                        {email.address}
                      </div>
                  }
                </div>

              </div>
              <div
                onClick={copyData}
                className={
                  showGmailLabel
                    ? `${styles.emailCol} ${copiado ? styles.emailCopiado : ''}`
                    : "d-none"
                }
              >
                <IconClipboardCheck />
              </div>
            </div>

          </div>
        </div>

        {/*  */}
        <div className={`col-10 col-lg-5  ${styles.rightColumn}`}>
          <div className={`row ${styles.introInvitation} text-center`}>
            {invitation}
          </div>

          <div className={`row w-100 ${styles.linksSliderRow} `}>
            <div className={`col-10 col-md-5 center-items ${styles.carouselCol}`}>
              <Link
                className={`${styles.landingPageLink}`}
                href="/proyectos"
              >
                Proyectos
              </Link>
              <LandingPageProjectsCarousel />
            </div>

            <div className={`col-10 col-md-5 center-items ${styles.carouselCol}`}>
              <Link
                className={`${styles.landingPageLink}`}
                href="/conocimientos"
              >
                Conocimientos
              </Link>
              <LandingPageTechCarousel />
            </div>
          </div>
        </div>


      </div>

      {/* <div
          onClick={() => changeComponentToRender()}
          className="row"
        >
          <ArrowDownButton />
        </div> */}
    </div >
  )
}
