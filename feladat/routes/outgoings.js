import path from 'path'
import express from 'express'
import __dirname from '../util/rootpath.js'
import fs from 'fs'

const router = express.Router()
const outgoingsFilePath = path.join(__dirname, 'public', 'data', 'outgoings.json')

// Helper function to get outgoings from file
const getOutgoings = (cb) => {
  fs.readFile(outgoingsFilePath, (err, data) => {
    if (err) {
      cb([])
    } else {
      cb(JSON.parse(data))
    }
  })
}

router.get('/', (req, res, next) => {
  getOutgoings((outgoings) => {
    res.render('outgoings', {
      outs: outgoings,
      pageTitle: 'Kiadások',
      path: '/'
    })
  })
})

export default router
