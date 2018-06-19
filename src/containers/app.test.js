import React from 'react'
import renderer from 'react-test-renderer'

import App from './app'
import { Button } from '../components'

test('Should wire up onclick on component from the container action', () => {
  const render = renderer.create(<App />)

  expect(render.root.findByType(Button)).toBeDefined()

  expect(render.root.findByType(Button).props.onClick)
    .toBe(render.getInstance().onBtnClick)
})

