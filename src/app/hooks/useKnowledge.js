import { useContext } from "react"
import { KnowledgeContext } from "../contexts/KnowledgeContext"

export function useKnowledge() {
  const { knowledgeToShow, setKnowledgeToShow } = useContext(KnowledgeContext)

  return { knowledgeToShow, setKnowledgeToShow }
}