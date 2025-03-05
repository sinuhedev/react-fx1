'use client'

import React, { useEffect } from 'react'
import { useFx, css } from 'react-fx1'
import functions from './functions'
import './style.css'

export default function Image () {
  const { state, fx } = useFx(functions)

  return (
    <section className={css('Image', '')}>

      <img src='logo.svg' />

      <div className='img' />

    </section>
  )
}
