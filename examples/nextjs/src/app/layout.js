'use client'

import { useEffect, Suspense, useRef } from 'react'
import 'assets/theme/index.css'
import { useFx, ReactFx } from 'react-fx1'
import functions from './functions'
import { Link, Icons, Icon, Translate, I18n } from 'components'

function Layout ({ children }) {
  const reactfx = useFx(functions)
  const { state, fx } = reactfx
  const ref = useRef()

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

          <div className='m-2' style={{ display: 'flex', gap: '20px' }}>

            <Icon value='globe' />
            <Translate value={state.i18nLocale} onChange={e => fx.changeI18n(e)} />

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

          <div className='m-2'>
            <Link href='/' className='mr-2'>
              /
            </Link>
            <Link href='/Home' className='mr-2'>
              Home
            </Link>
            <Link href='/Env' className='mr-2'>
              Env
            </Link>
            <Link href='/ContextPage' className='mr-2'>
              ContextPage
            </Link>
            <Link href='/Mockapi' className='mr-2'>
              Mockapi
            </Link>
            <Link href='/MockapiAndContainer' className='mr-2'>
              MockapiAndContainers
            </Link>
            <Link href='/URLSearchParams' value={{ id: 20, user: 'Sinuhe' }} className='mr-2'>
              URLSearchParams
            </Link>
            <Link href='/SubPage/Hello' className='mr-2'>
              SubPage/Hello
            </Link>
            <Link href='/Translate' className='mr-2'>
              Translate
            </Link>
            <Link href='/CounterPage' className='mr-2'>
              CounterPage
            </Link>
            <Link href='/Image' className='mr-2'>
              Image
            </Link>
            <Link href='/MediaQuery' className='mr-2'>
              MediaQuery
            </Link>
            <Link href='/NO'>NO</Link>
          </div>

          <main ref={ref} className='m-2'>
            {children}
          </main>

        </ReactFx>

        <Icons />
      </body>
    </html>
  )
}

export default Layout
