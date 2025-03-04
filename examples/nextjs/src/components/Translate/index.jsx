import React from 'react'
import { css, useFx } from 'react-fx1'
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
  if (!value) return ''

  const { context } = useFx()
  const i18nLocale = context.state.i18nLocale

  let locale = i18nFile.locales.includes(i18nLocale) ? i18nLocale : i18nFile.defaultLocale
  locale = i18nFile.locales.indexOf(locale)

  try {
    let text = value.split('.').reduce((ac, el) => ac[el], i18nFile)
    text = text[locale]

    if (args) {
      text = text.replace(
        /([{}])\\1|[{](.*?)(?:!(.+?))?[}]/g,
        (match, literal, number) => args[number] || match
      )
    }

    return text
  } catch (e) {
    console.error('Error in [il8n] => ' + value)
    return value
  }
}

export { Translate, I18n }
