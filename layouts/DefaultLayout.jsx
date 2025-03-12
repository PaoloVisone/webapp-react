// importo Header
import Header from "../src/components/Header";
// importo Outlet
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>

    )
}

export default DefaultLayout