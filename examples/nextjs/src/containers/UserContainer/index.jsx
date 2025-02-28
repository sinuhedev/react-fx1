import React from 'react'
import { useFx, css } from 'react-fx1'
import functions from './functions'
import './style.css'

export default ({ className, style }) => {
  const { initialState, state, fx } = useFx(functions)

  return (
    <article
      className={css('UserContainer-container', className, 'container')}
      style={style}
    >
      <div>
        <button onClick={() => fx.reset(['users', 'user'])}>Reset</button>

        <button
          onClick={() => {
            fx.reset(['users', 'user'])
            fx.handlerUser()
          }}
        >
          Get users
        </button>

        <button
          onClick={() => {
            fx.reset(['users', 'user'])
            fx.handlerUser(state.form.id)
          }}
        >
          Get user
        </button>

        <button
          onClick={() => {
            fx.reset(['users', 'user'])
            fx.handlerCreateUser()
          }}
        >
          Create user
        </button>

        <button
          onClick={() => {
            fx.reset(['users', 'user'])
            fx.handlerUpdateUser(state.form.id)
          }}
        >
          Update user
        </button>

        <button
          onClick={() => {
            fx.reset(['users', 'user'])
            fx.handlerDeleteUser(state.form.id)
          }}
        >
          Delete user
        </button>
      </div>

      <div>
        <div>
          id:{' '}
          <input
            type='text'
            name='form.id'
            value={state.form.id}
            onChange={e => fx.change(e)}
          />
        </div>
        <div>
          name:{' '}
          <input
            type='text'
            name='form.name'
            value={state.form.name}
            onChange={e => fx.change(e)}
          />
        </div>
      </div>

      <section>
        <article style={{ display: 'flex' }}>
          <pre style={{ margin: '0 50px 0 50px', width: '250px' }}>
            state = {JSON.stringify(state, undefined, 2)}
          </pre>
          <pre style={{ margin: '0 5px 0 5px', width: '250px' }}>
            initialState = {JSON.stringify(initialState, undefined, 2)}
          </pre>
        </article>
      </section>
    </article>
  )
}
