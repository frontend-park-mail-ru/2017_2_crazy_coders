import Message from '../Message/Message';
let io = require('socket.io-client');

export default class Client {
    socket: any;
    _instance: any;
    onopen: any;
    upadateInterval: any;
    message: Message;

    constructor() {
        if(this._instance)
            return this._instance;

        // this.socket = io('ws://10.100.122.201:8080/game');
        console.log('Info: try get instants of WebSocket.');
        // this.socket = new WebSocket('ws://localhost:8080/game');
        // this.socket = new WebSocket('ws://10.100.122.201:8080/game');
        // this.socket = new WebSocket('ws://10.100.122.151:8080/game');

        // this.socket = new WebSocket('ws://82.202.246.5:8080/game');
        this.socket = new WebSocket('wss://tanks-backend.xyz/api/game');

        this.message = new Message(this);
        console.log('Info: try create \"onopen\" function.');

        this.socket.onopen = (() => {
            console.log('Info: WebSocket connection opened.');

            try {
                this.message.sendJoinGameMsg();
                console.log("completed");

            } catch (ex) {
                debugger;
                console.log("[CLient] OnOpenFunction catch(error)");
                this.socket.close(1001, "error: exeception occured during the initialization stage: " + ex);
            }
        });
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