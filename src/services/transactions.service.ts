const transactionsService = {
    setUpSocket: ():WebSocket => {
        return new WebSocket("wss://ws.blockchain.info/inv");
    },

    subscribe: (
        socket:WebSocket,
        setIsSubscribed: (isSetUp: boolean) => void
    ) => {
        if (socket.readyState === WebSocket.OPEN) {
            setIsSubscribed(true);
            socket.send(JSON.stringify({
                "op": "unconfirmed_sub"
            }));
        }
    },

    unsubscribe: (socket:WebSocket):void => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(
                JSON.stringify({
                    op: "unconfirmed_unsub",
                })
            );
        } else {
            console.warn("Socket is not open. Cannot unsubscribe.");
        }
    },

    closeSocket: (socket:WebSocket):void => {
        if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
            socket.close();
        } else {
            console.warn("Socket is already closed or closing.");
        }
    }
}

export {transactionsService};