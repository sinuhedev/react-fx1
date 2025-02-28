import React, { useEffect } from 'react'
import { useFx, css } from 'react-fx1'
import functions from './functions'
import './style.css'

export default function Img () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('Img', 'm-2')}>

      <img src='logo.svg' />

      <div className='img' />
    </main>
  )
}
