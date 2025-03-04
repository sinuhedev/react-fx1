import React from 'react'

export default ({ children, href, value = {}, name, className, style, readOnly, disabled }) => {
  value = Object.keys(value).length ? '?' + new URLSearchParams(value).toString() : ''

  return (
    <a href={href + value} name={name} className={className} style={style} readOnly={readOnly} disabled={disabled}>
      {children}
    </a>
  )
}
