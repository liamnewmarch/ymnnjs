export default ({
  title = '',
  head = '',
  body = '',
} = {}) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1">
    <title>${title}</title>
    <link href="/style.css" rel="stylesheet">
    ${head}
  </head>
  <body>
    ${body}
  </body>
</html>
`
