const express = require('express')
const mongoose = require('mongoose')
const app = express()
const apiroutes = require('./routes/api_route.js')

const url = 'mongodb+srv://mahesh1234:Tanuja@143@cluster0.54pav.mongodb.net/node-api-db?retryWrites=true&w=majority'
app.use('/',apiroutes)
app.use(express.json())
mongoose.connect(url, {useNewUrlParser: true}).then(()=>{
	app.listen(3000)
	console.log('database connected!')

}).catch(err=>console.log(er))
