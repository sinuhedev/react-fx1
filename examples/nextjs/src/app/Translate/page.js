'use client'

import React, { useEffect } from 'react'
import { useFx, css, I18n } from 'react-fx1'
import functions from './functions'
import { TranslateComponent } from 'components'
import './style.css'

export default function Translate () {
  const { state, fx } = useFx(functions)

  return (
    <main className={css('Translate', '')}>
      <I18n value='page.name' args={['Sinuhe', 'Maceda', 'Bouchan']} />

      <ul>
        <li>
          <I18n value='ui.ok' />
        </li>
        <li>
          <I18n value='ui.back' />
        </li>
        <li>
          <I18n value='page.user.family' />
        </li>
        <li>
          <I18n value='page.module.block.docker' />
        </li>
        <li><TranslateComponent /></li>
      </ul>
    </main>
  )
}
