import {ITransaction} from "../models/ITransaction.ts";
import {FC} from "react";

type IProps = {
    connectionsStatus: boolean;
    transactions: ITransaction[];
    subscribe: () => void;
    unsubscribe: () => void;
    clear: () => void;
}

const TransactionsComponent: FC<IProps> = ({connectionsStatus, transactions, clear, unsubscribe, subscribe}) => {
    return (
        <div className={"w-full box-border mt-8 ml-1"}>
            <button
                onClick={subscribe}
                className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}>
                Subscribe
            </button>
            <button
                onClick={unsubscribe}
                className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}>
                Unsubscribe
            </button>
            <button
                onClick={clear}
                className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}>
                Clear
            </button>
            <h1 className={"text-2xl"}>Connection status: {connectionsStatus ? "Connected" : "Not connected"}</h1>
            <h1 className={"text-2xl"}>Transactions {transactions.length}</h1>
            <div className={"mr-2.5"}>
                <table className={"table-auto border-collapse border border-gray-300 w-full"}>
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 w-1/2 sm:w-1/3 text-xs sm:text-sm md:text-base">
                            Hash
                        </th>
                        <th className="border border-gray-300 px-4 py-2 w-1/2 sm:w-1/3 text-xs sm:text-sm md:text-base">
                            Value
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className={"even:bg-gray-100"}>
                            <td className={"border border-gray-300 px-4 py-2"}>{transaction.x.hash}</td>
                            <td className={"border border-gray-300 px-4 py-2"}>{transaction.x.out[0].value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionsComponent;