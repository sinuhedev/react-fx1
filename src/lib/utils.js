'use client'

import { flushSync } from 'react-dom'
import { useState, useEffect } from 'react'

function css (...classNames) {
  return classNames.filter(e => e).reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'string') {
      return accumulator + currentValue + ' '
    } else if (!Array.isArray(currentValue) && typeof currentValue === 'object') {
      for (const e in currentValue) {
        if (currentValue[e]) return accumulator + e + ' '
      }
    }
    return accumulator
  }, '').trim()
}

function i18n (value, args, i18nLocale, i18nFile) {
  if (!value) return ''
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

function startViewTransition (
  fun = () => {},
  ref = null,
  viewTransitionName = ''
) {
  if (!document.startViewTransition) return fun()

  ;(async () => {
    if (ref && ref.current) { ref.current.style.viewTransitionName = viewTransitionName }

    await document.startViewTransition(() => flushSync(() => fun())).finished

    if (ref && ref.current) ref.current.style.viewTransitionName = ''
  })()
}

function useLocation () {
  const getLocation = () => {
    const hashAndQueryString = window.location.hash.split('?')

    const queryString = Object.fromEntries(
      new URLSearchParams(hashAndQueryString[1])
    )

    return {
      hash: hashAndQueryString[0],
      ...queryString
    }
  }

  const [path, setPath] = useState(getLocation())

  useEffect(() => {
    window.addEventListener('popstate', () => setPath(getLocation()))
    return () => {
      window.removeEventListener('popstate', () => setPath(getLocation()))
    }
  }, [])

  return path
}

export { css, i18n, startViewTransition, useLocation }
