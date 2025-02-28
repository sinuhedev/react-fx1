import React, { useEffect } from 'react'
import { useFx, css } from 'react-fx1'
import functions from './functions'
import { UserContainer } from 'containers'
import './style.css'

export default function MockapiAndContainer () {
  const { initialState, state, fx } = useFx(functions)

  return (
    <main className={css('MockapiAndContainer', '')}>
      <UserContainer />
    </main>
  )
}
