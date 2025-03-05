'use client'

import React, { useEffect } from 'react'
import { useFx, css } from 'react-fx1'
import functions from './functions'
import { useSearchParams } from 'next/navigation'
import { Link } from 'components'
import './style.css'

export default function URLSearchParams () {
  const { state, fx } = useFx(functions)
  const searchParams = useSearchParams()

  return (
    <section className={css('URLSearchParams', '')}>
      URLSearchParams
      <br />
      <br />

      <Link href='/URLSearchParams'>
        Link
      </Link>
      <br />
      <Link href='/URLSearchParams' value={{ id: 4000 }}>
        Link id=4000
      </Link>
      <br />
      <Link href='/URLSearchParams' value={{ user: 'Maceda', demo: 200 }}>
        Link user=Maceda demo=200
      </Link>

      <br />
      <br />

      <pre style={{ margin: '0 50px 0 50px' }}>
        {JSON.stringify(Object.fromEntries(searchParams.entries()), undefined, 2)}
      </pre>

      <ul>
        <li>{'id: ' + searchParams.get('id')}</li>
        <li>{'user: ' + searchParams.get('user')}</li>
        <li>{'demo: ' + searchParams.get('demo')}</li>
      </ul>

    </section>
  )
}
