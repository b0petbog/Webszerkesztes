import path from 'path'
import express from 'express'
import __dirname from '../util/rootpath.js'
import fs from 'fs'

const router = express.Router()
const outgoingsFilePath = path.join(__dirname, 'public', 'data', 'outgoings.json')

// Helper function to save outgoing to file
const saveOutgoing = (outgoing) => {
  fs.readFile(outgoingsFilePath, (err, data) => {
    let outgoings = [];
    if (!err) {
      outgoings = JSON.parse(data);  // Parse existing outgoings
    }
    outgoings.push(outgoing); // Add the new outgoing
    fs.writeFile(outgoingsFilePath, JSON.stringify(outgoings, null, 2), (err) => {
      if (err) {
        console.log(err);
      }
    })
  })
}

// Helper function to modify outgoing to file
const modifyOutgoing = (outgoing) => {
  fs.readFile(outgoingsFilePath, (err, data) => {
    let outgoings = [];
    if (!err) {
      outgoings = JSON.parse(data);
    }
    const index = outgoings.findIndex(item => item.title === outgoing.title);
    outgoings[index].price = outgoing.price
    fs.writeFile(outgoingsFilePath, JSON.stringify(outgoings, null, 2), (err) => {
      if (err) {
        console.log(err)
      }
    })
  })
}

// Helper function to remove outgoing to file
const removeOutgoing = (outgoing) => {
  fs.readFile(outgoingsFilePath, (err, data) => {
    let outgoings = []
    if (!err) {
      outgoings = JSON.parse(data);
    }
    outgoings = outgoings.filter(item => item.title !== outgoing.title);
    fs.writeFile(outgoingsFilePath, JSON.stringify(outgoings, null, 2), (err) => {
      if (err) {
        console.log(err)
      }
    })
  })
}

// -----------------------------------------------------------------

// /admin/add-outgoing => GET
router.get('/add-outgoing', (req, res, next) => {
  res.render('add-outgoing', {
    pageTitle: 'Kiadás hozzáadása',
    path: '/admin/add-outgoing'
  })
})

// /admin/add-outgoing => POST
router.post('/add-outgoing', (req, res, next) => {
  const newOutgoing = { title: req.body.title, price: req.body.price }
  saveOutgoing(newOutgoing)
  res.redirect('/')
})

// -------------------------------------------------------------------

// /admin/remove-outgoing => GET
router.get('/remove-outgoing', (req, res, next) => {
  res.render('remove-outgoing', {
    pageTitle: 'Kiadás törlése',
    path: '/admin/remove-outgoing'
  })
})

// /admin/remove-outgoing => POST
router.post('/remove-outgoing', (req, res, next) => {
  const outgoingToRemove = { title: req.body.title }
  removeOutgoing(outgoingToRemove)
  res.redirect('/')
})

// --------------------------------------------------------------------

// /admin/modify-outgoing => GET
router.get('/modify-outgoing', (req, res, next) => {
  res.render('modify-outgoing', {
    pageTitle: 'Kiadás módosítása',
    path: '/admin/modify-outgoing'
  })
})

// /admin/modify-outgoing => POST
router.post('/modify-outgoing', (req, res, next) => {
  const newOutgoing = { title: req.body.title, price: req.body.price }
  modifyOutgoing(newOutgoing)
  res.redirect('/')
})

export default router
