const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { json } = require('express');
/*
const url = 'mongodb://test:testing123@54.164.251.124/Testing?retryWrites=true&w=majority';  //'mongodb+srv://Binero:Alfadelta4@cluster0mongodb.nwadf.mongodb.net/sample_airbnb?retryWrites=true&w=majority';//'mongodb://myUserAdmin:abc123@3.84.45.74/Admin?retryWrites=true&w=majority';



app.get('/', (req, res) => {
    //res.send("This is the homepage baby OOOH hhYEEAH");

    MongoClient.connect(url, (err, database) => {
        if (err) return console.log(err);
       var db = database.db("Testing");
        db.collection("Colors").findOne({
           _id: "1"
        },
        function(err, result){
            if(err) return console.log(err);
            res.send(result.name);
            console.log(result.name);             
    });
});
});*/

app.listen(PORT, () => {
    console.log("Server is running...");

});

