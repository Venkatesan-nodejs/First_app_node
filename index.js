const express = require('express');
const req = require('express/lib/request');
const app = express();
const route = require('./route')

app.use(express.json());
app.use(express.json({urlencoded:false}));
app.use(route);
app.listen(9000,function(error){
    if(error)
    {
        console.log('Error at port 9000!');
    }
    console.log('App is listening to port 9000');
})
