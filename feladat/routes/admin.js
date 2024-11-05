import path from 'path'
import express from 'express'
import __dirname from '../util/rootpath.js'
import fs from 'fs'

const router = express.Router()
const outgoingsFilePath = path.join(__dirname, 'public', 'data', 'outgoings.json')

// Helper function to save outgoing to file
const saveOutgoing = (outgoing) => {
  fs.readFile(outgoingsFilePath, (err, data) => {
    let outgoings = []
    if (!err) {
        outgoings = JSON.parse(data);  // Parse existing outgoings
    }
    outgoings.push(outgoing); // Add the new outgoing
    fs.writeFile(outgoingsFilePath, JSON.stringify(outgoings, null, 2), (err) => {
      if (err) {
        console.log(err)
      }
    })
  })
}

// /admin/add-outgoing => GET
router.get('/add-outgoing', (req, res, next) => {
  res.render('add-outgoing', {
    pageTitle: 'Add outgoing',
    path: '/admin/add-outgoing'
  })
})

// /admin/add-outgoing => POST
router.post('/add-outgoing', (req, res, next) => {
  const newOutgoing = { title: req.body.title, price: req.body.price }
  saveOutgoing(newOutgoing)
  res.redirect('/')
})

export default router