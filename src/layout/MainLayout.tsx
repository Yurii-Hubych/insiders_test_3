import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={"overflow-hidden"}>
            <Outlet/>
        </div>
    );
};

export default MainLayout;