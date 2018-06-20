import React from 'react'
import renderer from 'react-test-renderer'

import App from './app'
import { Input } from '../components'

test('Should wire up onclick on component from the container action', () => {
  const render = renderer.create(<App />)

  expect(render.root.findByType(Input)).toBeDefined()

  expect(render.root.findByType(Input).props.onKeyPress)
    .toBe(render.getInstance().onEnterKey)
})

