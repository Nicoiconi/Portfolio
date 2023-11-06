import React from 'react'

export default function layout({children}) {
  return (
    <div className='container-fluid w-100 h-100 d-flex flex-column text-center'>
      <title>Nicolas | Proyectos</title>
      {children}
    </div>
  )
}
