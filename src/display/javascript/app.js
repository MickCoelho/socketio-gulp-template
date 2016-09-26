window.THREE = require('three');
window.$ = require('jquery');
window.dat = require('dat-gui');
window.TweenMax = require('gsap');

var Backbone = require('backbone'),
io = require('socket.io-client');


var AppView = Backbone.View.extend({

    initialize: function(){
        var params = { mobile : true }

        this.initWebSockets();
    },

    initWebSockets: function () {
        this.socket = io();
        //Init listeners
        this.socket.on('message', this.onMessage);
        this.socket.emit('join', {type: 'display'});
        //Restart all the connected controllers
        this.socket.emit('message', 'controller', 'restart');
    },

    onMessage: function (data) {
        console.log( data );
        if(data.status === 'connected'){
            console.log( data.id + ' just connected to the display' );
            //TODO: add ball onto the 3d environment
        }else if(data.status === 'disconnected'){
            //TODO: remove ball based on the id
            console.log( data.id + ' just disconnected to the display' );
        }
    }

});


var appview = new AppView();
