let io = require('socket.io-client');

export default class Client {
    _socket: any;
    _instance: any;

    constructor() {
        if(this._instance)
            return this._instance;

        this._socket = io('ws://localhost:8080/game');
        let coord = {valX: 10,
                    valY: 10};
        let data = {platform: coord,
                    platformAngle: 2.2,
                    turretAngle: 4.5,
                    isShoot: true,
                    class: "TankSnap"
        };



        console.log("start");
        this._socket.send(JSON.stringify(data));
        console.log("stop");

        debugger;
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
                let data = {x: x,
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