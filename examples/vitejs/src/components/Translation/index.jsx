import React, { useEffect } from 'react'
import './style.css'
import { css } from 'react-fx1'
import { I18n } from 'components'

export default ({ children, name, value, type, className, style, readOnly, disabled, onClick = () => {} }) => {
  return (
    <article className={css('Translation-component', className)} style={style} name={name}>
      TranslationComponent-component : <span><I18n value='page.user.family' /></span>
    </article>
  )
}
