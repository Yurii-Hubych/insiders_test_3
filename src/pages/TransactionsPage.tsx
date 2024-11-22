import TransactionsComponent from "../components/TransactionsComponent.tsx";
import {useEffect, useState} from "react";
import {transactionsService} from "../services/transactions.service.ts";
import {ITransaction} from "../models/ITransaction.ts";

const TransactionsPage = () => {

    const [connectionStatus, setConnectionStatus] = useState<boolean>(false);
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {

        const socket = transactionsService.setUpSocket();
        setSocket(socket);

        socket.onmessage = function (event) {
            console.log(`Транзакція: ${event.data}`);
            setTransactions(prev => [JSON.parse(event.data), ...prev]);
        };

        return () => {
            transactionsService.closeSocket(socket);
            console.log("Socket closed");
        };
    }, []);

    const handleClear = () => {
        setTransactions([]);
    }

    const handleUnsubscribe = () => {
        if (!socket) return;
        transactionsService.unsubscribe(socket);
        setConnectionStatus(false);
    }

    const handleSubscribe = () => {
        if (!socket) return;
        transactionsService.subscribe(socket, setConnectionStatus);
    }

    return (
        <div>
            <TransactionsComponent
                clear={handleClear}
                connectionsStatus={connectionStatus}
                transactions={transactions}
                subscribe={handleSubscribe}
                unsubscribe={handleUnsubscribe}
            />
        </div>
    );
};

export default TransactionsPage;