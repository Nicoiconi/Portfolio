import React from 'react'
import { KnowledgeProvider } from '../contexts/KnowledgeContext'
import ConocimientosTopBar from './components/ConocimientosTopBar/ConocimientosTopBar'

export default function ConocimientosLayout({ children }) {
  return (
    <div className='container-fluid w-100 h-100 d-flex flex-column text-center'>
      <title>Nicolas | Conocimientos</title>
      <KnowledgeProvider>

        <ConocimientosTopBar />
        {children}
      </KnowledgeProvider>
    </div>
  )
}
