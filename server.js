

//----------------------------------------
//   GLOBAL
//----------------------------------------
var _ = require('lodash');

//----------------------------------------
//   SERVERS CONFIG
//----------------------------------------
//Sockets
var socketServerPort = 3000;
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io').listen(server);
var defaultSocketRoom = 'iot-prototype';

//Starting the server
app.use(express.static(__dirname + '/build'));
server.listen(socketServerPort);
app.get('/', function (req, res) {
    'use strict';
    res.render('index', {});
});

//----------------------------------------
// CALLBACKS
//----------------------------------------
var people = [];
var controllerClients = [];
var displayClients = [];
socket.on('connection', function (client){
    client.join(defaultSocketRoom);

    client.on('join', function(clientInfos){
        people[client.id] = clientInfos.type;
        if(clientInfos.type === 'controller'){
            console.log( client.id );
            controllerClients.push( client );
            //Tell the displays that a client just connected
            for ( i = 0 ; i < displayClients.length ; i ++){
                displayClients[i].send( {
                    status: 'connected',
                    id: client.id
                } );
            }
        }else if(clientInfos.type === 'display'){
            displayClients.push( client );
        }
        console.log( clientInfos.type + ' has connected to the server.' );
    });

    client.on('message', function(target, msg){
        console.log( people[client.id] + ' sent a message to ' + target + ' ( ' + msg + ' )' );
        var i = 0;
        if(target === 'display'){
            for ( i = 0 ; i < displayClients.length ; i ++){
                displayClients[i].send( msg );
            }
        }
        if(target === 'controller'){
            for ( i = 0 ; i < controllerClients.length ; i ++){
                controllerClients[i].send( msg );
            }
        }
    });

    client.on('disconnect', function(){
        console.log( people[client.id] + ' has disconnected from the server.' );
        //Tell the displays that a client just disconnected
        for ( i = 0 ; i < displayClients.length ; i ++){
            displayClients[i].send( {
                status: 'disconnected',
                id: client.id
            } );
        }
        delete people[client.id];
    });

});


//----------------------------------------
// OPEN BROWSER
//----------------------------------------
var open = require('open');
open('http://localhost:3000/display');
