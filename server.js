import express from 'express'

async function renderContent(contentPath) {
  const content = await import(`./content/${contentPath}.js`)
  return content.default.template(content)
}

const app = express()

app.use(express.static('static'))

app.get('/', async (request, response) => {
  const content = await renderContent('index')
  response.set('Content-Type', 'text/html')
  response.send(content)
})

app.listen(80)
