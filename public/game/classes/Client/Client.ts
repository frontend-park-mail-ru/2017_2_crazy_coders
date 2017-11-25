let io = require('socket.io-client');

export default class Client {
    socket: any;
    _instance: any;
    onopen: any;
    upadateInterval: any;

    constructor() {
        if(this._instance)
            return this._instance;

        // this.socket = io('ws://10.100.122.201:8080/game');
        console.log('Info: try get instants of WebSocket.');
        // this.socket = new WebSocket('ws://localhost:8080/game');
        this.socket = new WebSocket('ws://10.100.122.201:8080/game');

        // debugger;
        console.log('Info: try create \"onopen\" function.');

        this.socket.onopen = (() => {
            // Socket open.. start the game loop.
            console.log('Info: WebSocket connection opened.');

            try {
                // Game.tryStartGame();
                console.log("Creating data...");
                let coord = {valX: 10,
                    valY: 10};

                let data = {
                    platform: coord,
                    platformAngle: 2.2,
                    turretAngle: 4.5,
                    isShoot: true,
                    class: "TankSnap"
                };

                console.log("Try send data");
                debugger;
                this.socket.send(JSON.stringify(data));

                // this.updateInterval = setInterval(() => {
                //     this.socket.send(JSON.stringify(data), 5000);
                // });

                console.log("completed");

            } catch (ex) {
                console.log("ERROR");
                debugger;
                this.socket.close(1001, "error: exeception occured during the initialization stage: " + ex);
            }
        });

        debugger;
    }

    // askNewPlayer() {
    //     this.socket.emit('newplayer');
    // }

    // sendCoordinate(coordinate) {
    //     this.socket.emit('playercoordinate', coordinate.xCoordinate, coordinate.yCoordinate);
    // }

    // getEnemyCoordinate() {
    //     return new Promise(resolve => {
    //         this.socket.on('enemycoordinate',function(x, y){
    //             let data = {x: x,
    //                     y: y};
    //             resolve(data);
    //         });
    //     });
    // }
    //
    // getPlayerData() {
    //     return new Promise(resolve => {
    //         this.socket.on('playerdata',function(data){
    //             resolve(data);
    //         });
    //     });
    // }
    //
    // appearedNewPlayer() {
    //     return new Promise(resolve => {
    //         this.socket.on('newplayer',function(data){
    //             resolve(data);
    //         });
    //     });
    // }
    //
    // getPlayersPositions() {
    //     return new Promise(resolve => {
    //         this.socket.on('allplayers',function(data){
    //             console.log(data);
    //             resolve(data);
    //         });
    //     })
    // }

}