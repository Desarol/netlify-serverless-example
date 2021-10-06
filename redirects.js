const fs = require('fs')
const path = require('path')

const run = async () => {
  const includeDashFn = process.env.CONTEXT === 'production'
  const ext = includeDashFn ? '-fn' : ''

  fs.promises.writeFile(
    path.join(__dirname, 'public', '_redirects'),
    ([
      `/api/rust/* /.netlify/functions/rust-serverless${ext}/:splat 200!`,
      `/api/go/* /.netlify/functions/go-serverless${ext}/:splat 200!`,
    ]).join('\r\n'),
    'utf8'
  )
}

run()
