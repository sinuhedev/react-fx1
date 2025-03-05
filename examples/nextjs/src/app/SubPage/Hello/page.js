'use client'

import React, { useEffect } from 'react'
import { useFx, css } from 'react-fx1'
import functions from './functions'
import './style.css'

export default function SubPageHello () {
  const { state, fx } = useFx(functions)

  return (
    <section className={css('SubPageHello', '')}>
      SubPageHello
    </section>
  )
}
