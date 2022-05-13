// les declarations 
const express = require('express');
const blockchain= require("./Controller/BlockChain");
const bodyparser = require('body-parser');
const cookieparser =  require('cookie-parser');
const cors = require('cors');
var multer = require('multer');
var upload = multer();
const userRoutes = require("./Routes/User");
const PORT =process.env.PORT || 5000;
const app = express();
var fs = require('fs');
var path = require('path');

require('./Models/BD');


const corsOptions={
    origin: 'http://localhost:3000',
    credentials:true,
    'allowedHeaders':['sessionId','Content-Type'],
    'exposedHeaders':['sessionId'],
    'methods':'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue':false
}


app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(cookieparser()); +
app.use(bodyparser.urlencoded({extended: true}));

app.get('/blocks', (req, res) => res.send(JSON.stringify(block)));
    app.post('/mineBlock', (req, res) => {
        var newBlock = blockchain.generateNextBlock(req.body.data);
        blockchain.addBlock(newBlock);
        blockchain.broadcast(responseLatestMsg());
        console.log('block ajouté : ' + JSON.stringify(newBlock));
        res.send();
    });
    app.get('/peers', (req, res) => {
        res.send(sockets.map(s => s._socket.remoteAddress + ':' + s._socket.remotePort));
    });
    app.post('/addPeer', (req, res) => {
        blockchain.connectToPeers([req.body.peer]);
        res.send();
    });

app.use('/Utilisateur', userRoutes)

app.listen(PORT,()=>{
    console.log('on ecoute le port :', PORT);
});