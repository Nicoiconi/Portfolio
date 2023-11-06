'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import Link from "next/link"
import styles from "./TopBar.module.css"
// import bootstrap from "../../globals.css"
import { IconHome2, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import clsx from 'clsx'
import personal_data from "../../data/personal-data.json"

export default function TopBar() {

  const pathname = usePathname();

  const { linkedin, github } = personal_data;

  return (
    <div className={`row ${styles.topBar}`}>
      <div className={`col center-items p-4`}>
        <Link
          href="/"
        >
          <IconHome2
            width="50"
            height="50"
            className={pathname === "/" ? styles.homePressed : styles.homeIcon}
          />
        </Link>
      </div>
      <div className={`col center-items p-4`}>
        <Link
          href="/conocimientos"
          className={clsx(styles.link, pathname === "/conocimientos" && styles.linkPressed)}
        >
          Conocimientos
        </Link>
      </div>
      <div className={`col center-items p-4`}>
        <Link
          href="/proyectos"
          className={clsx(styles.link, pathname === "/proyectos" && styles.linkPressed)}
        >
          Proyectos
        </Link>
      </div>
      <div className={`col center-items p-4`}>
        <a href={github.url} target="_blank">
          <IconBrandGithub
            width="40"
            height="40"
            className={styles.githubIcon}
          />
        </a>
      </div>
      <div className={`col center-items p-4`}>
        <a href={linkedin.url} target="_blank">
          <IconBrandLinkedin
            width="60"
            height="60"
            className={styles.linkedinIcon}
          />
        </a>
      </div>
    </div>
  )
}
