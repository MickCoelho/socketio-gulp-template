var Backbone = require('backbone'),
io = require('socket.io-client');
window.TweenMax = require('gsap');

var AppView = Backbone.View.extend({

    currentSpeed: 0,

    initialize: function(){
        this.initUI();
        this.initWebSockets();
    },

    initUI: function () {
    },

    initWebSockets: function () {
        this.socket = io('http://localhost:3000');
        //Init listeners
        this.socket.on('message', this.onMessage);
        this.socket.emit('join', {type: 'controller'});
    }

});


var appview = new AppView();
