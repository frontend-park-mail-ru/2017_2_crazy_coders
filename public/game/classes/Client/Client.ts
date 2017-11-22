let io = require('socket.io-client');

export default class Client {
    _socket: any;
    _instance: any;

    constructor() {
        if(this._instance)
            return this._instance;

        this._socket = io('http://localhost:3000');
    }

    askNewPlayer() {
        this._socket.emit('newplayer');
    }

    appearedNewPlayer() {
        return new Promise(resolve => {
            this._socket.on('newplayer',function(data){
                resolve(data);
            });
        });
    }

    getPlayersPositions() {
        return new Promise(resolve => {
            this._socket.on('allplayers',function(data){
                console.log(data);
                resolve(data);
            });
        })
    }

}