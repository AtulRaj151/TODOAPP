const express = require('express');
const port = 8000;
const app = express();

//........................................................//

//setting the static files 
app.use(express.static('./assets'));

//connecting to the database

const db = require('./config/mongoose');
const Tasks = require('./models/tasks');

app.use(express.urlencoded());


//setting the views engine ejs
app.set('view engine','ejs');
app.set('views','./views');

//assigining the path of routes
app.use('/',require('./routes'));


//setting the server on port
app.listen(port,function(err){

      if(err){ console.log('error in connecting the server',err); return ;}

      console.log("SuccessFully Connected to  port  = ",port);
      return;
})