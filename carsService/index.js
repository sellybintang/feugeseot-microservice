const express = require ('express');
const bodyParser = require('body-parser')
const cors = require ('cors');
const App = express();
const router = require('./routes/index')
const port= process.env.PORT || 3005;

App.use(cors());
App.use(bodyParser.json())

App.use(router);
App.listen(port,() =>{
    console.log(`Express is listening on port ${port}`)
})