import React, { useEffect } from 'react'
import { useFx, css, useLocation } from 'react-fx1'
import { Link } from 'components'
import functions from './functions'
import './style.css'

export default function URLSearchParams () {
  const { state, fx } = useFx(functions)
  const qs = useLocation()

  useEffect(() => {
    console.info(qs)
  }, [qs])

  return (
    <main className={css('URLSearchParams', '')}>
      URLSearchParams
      <br />
      <br />
      <Link href='#/URLSearchParams' value={{ id: 4000 }}>
        Link id=4000
      </Link>
      <br />
      <Link href='#/URLSearchParams' value={{ user: 'Maceda', demo: 200 }}>
        Link user=Maceda demo=200
      </Link>
      <br />
      <br />
      <pre style={{ margin: '0 50px 0 50px' }}>
        {JSON.stringify(qs, undefined, 2)}
      </pre>
    </main>
  )
}
