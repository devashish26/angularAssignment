const express = require("express");
const userroutes = require('./src/users/routes')
const adminroutes = require('./src/admin/routes')
const controller = require('./src/users/controller')
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());

const corsOptions = {  //enabling crossover
  origin: 'http://localhost:4200',
};

app.use(cors(corsOptions));

app.get("/", controller.getusers)

app.use('/api/v1/users', userroutes);
app.use('/api/v1/admin', adminroutes);
// app.use('/heheboy', userroutes)

app.listen(port, ()=> console.log(`app listening on port ${port}`))