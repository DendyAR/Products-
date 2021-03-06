'use strict';
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const studentRoutes = require('./routes/student-routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use('/api', studentRoutes.route)

app.listen(config.port, () => console.log(`APP is ruunning on url http://localhost` + config.port))