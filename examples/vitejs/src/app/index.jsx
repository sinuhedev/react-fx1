import React, { useEffect, useRef } from 'react'
import { useFx, ReactFx, useLocation, startViewTransition, I18n, Link, Icon } from 'react-fx1'
import { Translate, Icons } from 'components'
import functions from './functions'

export default function App () {
  const reactFx = useFx(functions)
  const qs = useLocation()

  const { state, fx } = reactFx

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
          <Link href='/' className='mr-2'>
            /
          </Link>
          <Link href='#/' className='mr-2'>
            Home
          </Link>
          <Link href='#/Env' className='mr-2'>
            Env
          </Link>
          <Link href='#/ContextPage' className='mr-2'>
            ContextPage
          </Link>
          <Link href='#/Mockapi' className='mr-2'>
            Mockapi
          </Link>
          <Link href='#/MockapiAndContainer' className='mr-2'>
            MockapiAndContainers
          </Link>
          <Link href='#/URLSearchParams' value={{ id: 20, user: 'Sinuhe' }} className='mr-2'>
            URLSearchParams
          </Link>
          <Link href='#/SubPage/Hello' className='mr-2'>
            SubPage/Hello
          </Link>
          <Link href='#/Translate' className='mr-2'>
            Translate
          </Link>
          <Link href='#/CounterPage' className='mr-2'>
            CounterPage
          </Link>
          <Link href='#/Image' className='mr-2'>
            Image
          </Link>
          <Link href='#/MediaQuery' className='mr-2'>
            MediaQuery
          </Link>
          <Link href='#/NO' className='mr-2'>
            NO
          </Link>
        </div>

        <div ref={page}>
          {Page && <Page />}
        </div>

        <Icons />

      </ReactFx>
    </>
  )
}
