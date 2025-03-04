import React, { useEffect } from 'react'
import functions from './functions'
import { useFx, css } from 'react-fx1'
import './style.css'
import { TranslateComponent, I18n } from 'components'

export default function Translate () {
  const { state, fx } = useFx(functions)

  return (
    <section className={css('Translate', '')}>
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
    </section>
  )
}
