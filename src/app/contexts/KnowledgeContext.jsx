'use client'

import { createContext, useState } from "react"

export const KnowledgeContext = createContext()

export function KnowledgeProvider({ children }) {

  const [knowledgeToShow, setKnowledgeToShow] = useState("languages-technologies");

  return (
    <KnowledgeContext.Provider value={
      {
        knowledgeToShow,
        setKnowledgeToShow
      }
    }>
      {children}
    </KnowledgeContext.Provider>
  )
}