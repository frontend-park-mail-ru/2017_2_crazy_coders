var MessagingTools = function (Client) {

    this.sendTankSnap = function(snap) {
        snap.class = "ClientSnap";
        send(JSON.stringify(snap));
    };

    var send = function(message) {
        if (Client.socket.readyState === Client.socket.CLOSED ||
            Client.socket.readyState === Client.socket.CLOSING) {
            return;
        }
        Client.socket.send(message)
    };
};

export default MessagingTools;