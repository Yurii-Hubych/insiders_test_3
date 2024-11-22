import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import TransactionsPage from "../pages/TransactionsPage.tsx";

const routes: RouteObject[] = [
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"/transactions"}/>},
            {path: "transactions", element: <TransactionsPage/>},
            {path: "ds", element: <div>123</div>}
        ]
    }
];

export const router = createBrowserRouter(routes)