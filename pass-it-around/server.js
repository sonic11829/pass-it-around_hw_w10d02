const fs = require('fs')
const express = require('express')
const {bottles} = require('./models/bottles')


const app = express()


app.use(express.urlencoded({ extended: true }))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

// INDEX 
app.get('/bottles', (req, res) => {
    res.render('bottles/Index', { bottles })
})

  // SHOW 
app.get('/bottles/:i', (req, res) => {
    res.render('bottles/Show', {
        bottle: bottles[req.params.i]
    })
})

// countDown("click", () => {
//     bottle.amount = bottle.amount - 1
// })

// Make it so when Heineken is clicked on the show page it reloads show page but number of bottles goes down by one increment untill 0 is reached


app.listen(3000, () => {
    console.log('Listening on Port 3000')
})