const express = require('express')
const App = express();
const cors = require('cors');
const router = require('./routes/routes');
const port = 3007

App.use (cors());

App.use(router);
App.listen (port,()=>{
    console.log(`Axios have been connected on port ${port}`)
})