'use strict'

const path = require('path')

const express = require('express')

const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath
}))
app.use(hotMiddleware(compiler))

app.get('/tests', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../static/tests.html'))
)

app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../static/index.html'))
)

app.listen(
  80,
  (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Listening at http://localhost:80')
    }
  })
