import React, { useEffect, useState, flushSync, useRef } from 'react'
import './style.css'
import { css, startViewTransition } from 'react-fx1'

export default ({
  children,
  name,
  value,
  type,
  className,
  style,
  readOnly,
  disabled,
  I18n,
  onChange,
  animation = 'count'
}) => {
  const self = useRef()

  return (
    <article
      className={css('Counter-component', className)}
      style={style}
      name={name}
    >
      <button
        onClick={e => {
          startViewTransition(() => onChange(e), self, animation)
        }}
      >
        Increment
      </button>

      <label ref={self}>{value}</label>
    </article>
  )
}
