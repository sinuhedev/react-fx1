import { useRef } from 'react'
import './style.css'
import { startViewTransition, css } from 'react-fx1'

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
  animation = 'count',
  onChange
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
