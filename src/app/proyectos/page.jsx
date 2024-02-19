'use client'

import { useState } from "react"
import styles from "./page.module.css"
import { projects } from "../data/projects"
import { IconBrandGithub, IconCaretUp, IconCaretDown, IconWorldWww } from "@tabler/icons-react"
import CarouselProjectImages from "./components/CarouselProjectImages/CarouselProjectImages"
import { lusitana, montserrat } from "../fonts"

export default function Proyectos() {

  const [expandedProjects, setExpandedProjects] = useState([])

  function handleExpandProject(pIndex) {
    if (expandedProjects.includes(pIndex)) {
      const updatedProjects = expandedProjects.filter(i => i !== pIndex)
      setExpandedProjects(updatedProjects)
    } else {
      const updatedProjects = [...expandedProjects, pIndex]
      setExpandedProjects(updatedProjects)
    }
  }

  return (
    <div className={`container ${styles.projectContainer}`}>
      {
        projects?.map((p, pIndex) => {
          return (
            <div
              key={pIndex}
              className={`row ${styles.projectBox}`}
            >
              <div className={`row ${styles.projectBoxHeader}`}>
                <div className={`col-12 col-sm-2 col-md-1 ${styles.expandButtonColumn}`}>
                  {
                    expandedProjects?.includes(pIndex)
                      ? <IconCaretUp
                        height={30}
                        width={30}
                        className={`${styles.expandButton}`}
                        onClick={() => handleExpandProject(pIndex)}
                      />
                      : <IconCaretDown
                        height={30}
                        width={30}
                        className={`${styles.expandButton}`}
                        onClick={() => handleExpandProject(pIndex)}
                      />
                  }
                </div>
                <div className="col">
                  <div className={`${lusitana.className} ${styles.projectName}`}>
                    {p?.name}
                    {
                      !p?.github_url
                        ? ""
                        :
                        <a href={p?.github_url} target="_blank">
                          <IconBrandGithub
                            width="40"
                            height="40"
                            className={`${styles.projectGithubIcon}`}
                          />
                        </a>
                    }
                    {
                      !p?.deploy_url
                        ? ""
                        :
                        <a href={p?.deploy_url} target="_blank">
                          <IconWorldWww
                            width="40"
                            height="40"
                            className={`${styles.projectGithubIcon}`}
                          />
                        </a>
                    }
                  </div>
                </div>
              </div>

              {
                expandedProjects?.includes(pIndex)
                  ? <div className={`container ${styles.projectData}`}>
                    {
                      p?.technologies?.length === 0
                        ? ""
                        : <>
                          <div className={`row ${lusitana.className} ${styles.techsContainer}`}>
                            {
                              p?.technologies?.map(t => {
                                return (
                                  <div
                                    className={`${styles.techLabel}`}
                                    key={`${t}-${p?.name}`}
                                  >
                                    {t}
                                  </div>
                                )
                              })
                            }
                          </div>

                          <hr />
                        </>
                    }

                    {
                      p?.images?.length === 0
                        ? <div className={`col ${montserrat.className} ${styles.projectDescription}`}>
                          {p?.description}
                        </div>
                        : <div className={`row flex-wrap ${styles.descriptionCarousel}`}>

                          <div className={`col-lg-8 ${montserrat.className} ${styles.projectDescription}`}>
                            {p?.description}
                          </div>

                          {
                            p?.images?.length === 0
                              ? ""
                              : <div className={`col-lg-4 ${styles.carouselSection}`}>
                                <CarouselProjectImages
                                  images={p?.images}
                                  name={p?.name}
                                />
                              </div>
                          }

                        </div>
                    }
                  </div>
                  : null
              }

            </div>
          )
        })
      }
    </div >
  )
}
