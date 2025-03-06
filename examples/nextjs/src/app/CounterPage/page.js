'use client'

import React, { useEffect } from 'react'
import { useFx, css } from 'react-fx1'
import functions from './functions'
import { Counter } from 'components'
import './style.css'

export default function CounterPage () {
  const { state, fx } = useFx(functions)

  return (
    <section className={css('CounterPage')}>

      <div className={css('', 'class-test', {}, null, true, false, [], { 'css-false': false }, undefined, { 'css-true': true })}>
        CSS
      </div>

      <div className={css(null)} />
      <div className={css(undefined)} />
      <div className={css([])} />
      <div className={css({})} />
      <div className={css()} />

      <Counter
        value={state.count}
        onChange={() => {
          fx.set({ count: state.count + 1 })
        }}
      />
      <br />
      <br />
      <Counter
        value={state.count2}
        onChange={() => {
          fx.set({ count2: state.count2 + 10 })
        }}
        animation='count2'
      />

    </section>
  )
}
