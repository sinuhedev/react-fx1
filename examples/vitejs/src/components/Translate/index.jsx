import React from 'react'
import { css, i18n, useFx } from 'react-fx1'
import i18nFile from 'assets/i18n'
import './style.css'

const Translate = ({ className, style, value, onChange }) => {
  return (
    <article className={css('Translate-component', className)} style={style}>
      <select
        name='i18n'
        value={value}
        onChange={onChange}
      >
        {i18nFile.locales.map(e => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </article>
  )
}

const I18n = ({ value, args = [] }) => {
  const { context } = useFx()
  return i18n(value, args, context.state.i18nLocale, i18nFile)
}

export { Translate, I18n }
