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

    sendCoordinate(coordinate) {
        this._socket.emit('playercoordinate', coordinate.xCoordinate, coordinate.yCoordinate);
    }

    getEnemyCoordinate() {
        return new Promise(resolve => {
            this._socket.on('enemycoordinate',function(x, y){
                data = {x: x,
                        y: y};
                resolve(data);
            });
        });
    }

    getPlayerData() {
        return new Promise(resolve => {
            this._socket.on('playerdata',function(data){
                resolve(data);
            });
        });
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