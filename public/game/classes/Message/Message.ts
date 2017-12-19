import Client from '../Client/Client';

export default class Message {
    class: string;
    joinGameMessage: any;
    client: any;

    constructor(Client: Client) {
        this.client = Client;
        this.class = "ClientSnap";
        this.joinGameMessage = {
            class: "JoinGame$Request",
        };
    }

    sendJoinGameMsg() {
        // debugger;
        this.send(JSON.stringify(this.joinGameMessage));
    };

    sendClientSnap(snap) {
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