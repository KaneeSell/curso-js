const express = require('express')
const app = express()
const porta = 3003
const schedule = require('node-schedule')
app.listen(porta, () => { console.log('Show')
    // const schedule = require('node-schedule')
    // const job = schedule.scheduleJob('/5 * 12 * * 2', () => {
    //     console.log('Show!')
    // })
    // const job = schedule.scheduleJob('/5 * * * * *', () => {
    //     console.log('Show!')
    // })
})

// const schedule = require('node-schedule')
// const job = schedule.scheduleJob('/5 * 12 * * 2', function() {
//     console.log('Show!')
// })