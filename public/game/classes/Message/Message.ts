import Client from '../Client/Client';

export default class Message {
    class: string;
    joinGameMessage: Object;
    client: any;

    constructor(Client: Client) {
        this.client = Client;
        this.class = "ClientSnap";
        this.joinGameMessage["class"] = "JoinGame$Request";
    }

    sendJoinGameMsg() {
        this.send(JSON.stringify(this.joinGameMessage));
    };

    sendClientSnap(snap) {
        snap.class = "ClientSnap";
        this.send(JSON.stringify(snap));
    };

    send(message) {
        if (this.client.socket.readyState === this.client.socket.CLOSED ||
            this.client.socket.readyState === this.client.socket.CLOSING) {
            return;
        }
        this.client.socket.send(message);
    };
}