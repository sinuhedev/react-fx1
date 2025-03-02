import React, { useEffect, useRef } from 'react'
import { useFx, ReactFx, useLocation } from 'react-fx1'
import { Link } from 'components'
import functions from './functions'

export default function App () {
  const reactFx = useFx(functions)
  const { state, fx } = reactFx
  const qs = useLocation()

  const Page = state.page
  const page = useRef()

  // page
  useEffect(() => {
    fx.getPage(qs)
  }, [qs.hash])

  return (
    <ReactFx value={reactFx}>
      <div className='mx-5 my-3'>
        <Link href='/' className='m-2'>
          /
        </Link>
        <Link href='#/Home' className='m-2'>
          Home
        </Link>
        <Link href='#/MediaQuery' className='m-2'>
          MediaQuery
        </Link>

        <Link href='#/NO' className='m-2'>
          NO
        </Link>

      </div>

      <div ref={page}>
        {Page && <Page />}
      </div>
    </ReactFx>
  )
}
