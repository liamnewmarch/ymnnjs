import base from './base.js'

export const body = `
  <p>Hello, world!</p>
`

export default ({
  title = '',
} = {}) => base({
  body,
  title,
})
