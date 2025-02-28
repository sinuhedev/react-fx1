'use client'

import { useEffect, Suspense } from 'react'
import 'theme/index.css'
import { useFx, ReactFx, Icon, I18n } from 'react-fx1'
import functions from './functions'
import { Link, Icons, Translate } from 'components'

function Layout ({ children }) {
  const reactfx = useFx(functions)
  const { state, fx } = reactfx

  useEffect(() => {
    fx.init()
  }, [])

  return (
    <html>
      <head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <link rel='shortcut icon' href='logo.svg' />
        <meta
          name='version'
          content={`version=${process.env.VERSION}, env=${process.env.NODE_ENV}, release-date=${new Date()}, git-hash=${process.env.GIT_HASH}`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
      </head>
      <body className=''>

        <ReactFx value={reactfx}>

          <div style={{ display: 'flex', gap: '20px' }}>

            <Icon value='globe' />
            <Translate />
            <I18n value='page.name' args={['Sinuhe', 'Maceda', 'Bouchan']} />

            <button onClick={e => fx.increment(e)}>increment</button>
            {'  '}
            <button onClick={e => fx.decrement(e)}>decrement</button>
            {'  '}
            <button onClick={() => fx.zero({ value: 0 })}>zero</button>
            {'  '}
            {state.num}
            {'  '}
            {state.loading ? <span> Loading... </span> : <span> View.. </span>}
          </div>

          <br />

          <div>
            <Link href='/' className='m-2'>
              /
            </Link>
            <Link href='/Home' className='m-2'>
              Home
            </Link>
            <Link href='/Env' className='m-2'>
              Env
            </Link>
            <Link href='/ContextPage' className='m-2'>
              ContextPage
            </Link>
            <Link href='/Mockapi' className='m-2'>
              Mockapi
            </Link>
            <Link href='/MockapiAndContainer' className='m-2'>
              MockapiAndContainers
            </Link>
            <Link href='/URLSearchParams' value={{ id: 20, user: 'Sinuhe' }} className='m-2'>
              URLSearchParams
            </Link>
            <Link href='/SubPage/Hello' className='m-2'>
              SubPage/Hello
            </Link>
            <Link href='/Translate' className='m-2'>
              Translate
            </Link>
            <Link href='/CounterPage' className='m-2'>
              CounterPage
            </Link>
            <Link href='/MediaQuery' className='m-2'>
              MediaQuery
            </Link>
            <Link href='/NO'>NO</Link>
          </div>

          <br />

          <Suspense fallback={<div />}>
            {children}
          </Suspense>

        </ReactFx>

        <Icons />
      </body>
    </html>
  )
}

export default Layout
