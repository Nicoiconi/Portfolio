'use client'

import { useKnowledge } from "../hooks/useKnowledge"
import MernStackContainer from "./components/MernStackContainer/MernStackContainer"
import TechnologiesContainer from "./components/TechnologiesContainer/TechnologiesContainer"

export default function Conocimientos() {

  const { knowledgeToShow } = useKnowledge()

  // const knowledgeToShow = ""

  return (
    <div className="container-fluid tech-cointainer">

      {
        knowledgeToShow === "languages-technologies"
          ? <>
            <TechnologiesContainer />
          </>
          : ""
      }

      {
        knowledgeToShow === "mern-stack"
          ? <>
            <MernStackContainer />
          </>
          : ""
      }

    </div>
  )
}