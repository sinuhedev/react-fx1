import React, { useEffect, useRef } from 'react'
import { useFx, ReactFx, useLocation, useResize, startViewTransition, I18n, Link, Icon } from 'react-fx1'
import { Translate, Icons } from 'components'
import functions from './functions'

export default function App () {
  const reactFx = useFx(functions)
  const { state, fx } = reactFx
  // hooks
  const qs = useLocation()
  const resize = useResize()

  const Page = state.page
  const page = useRef()

  // page
  useEffect(() => {
    startViewTransition(() => fx.getPage(qs), page, 'fade')
  }, [qs.hash])

  return (
    <>
      <ReactFx value={reactFx}>
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
          <Link href='#/Home' className='m-2'>
            Home
          </Link>
          <Link href='#/Env' className='m-2'>
            Env
          </Link>
          <Link href='#/ContextPage' className='m-2'>
            ContextPage
          </Link>
          <Link href='#/Mockapi' className='m-2'>
            Mockapi
          </Link>
          <Link href='#/MockapiAndContainer' className='m-2'>
            MockapiAndContainers
          </Link>
          <Link href='#/URLSearchParams' value={{ id: 20, user: 'Sinuhe' }} className='m-2'>
            URLSearchParams
          </Link>
          <Link href='#/SubPage/Hello' className='m-2'>
            SubPage/Hello
          </Link>
          <Link href='#/Translate' className='m-2'>
            Translate
          </Link>
          <Link href='#/CounterPage' className='m-2'>
            CounterPage
          </Link>
          <Link href='#/MediaQuery' className='m-2'>
            MediaQuery
          </Link>
          <Link href='#/NO' className='m-2'>
            NO
          </Link>

        </div>

        <div ref={page}>
          {Page &&
            <Page
              qs={qs}
              resize={resize}
            />}
        </div>

        <Icons />

      </ReactFx>
    </>
  )
}
