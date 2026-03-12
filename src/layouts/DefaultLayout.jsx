import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <h2>Header</h2>
                {/* NAVBAR */}
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                {/* FOOTER */}
            </footer>
        </>
    )
}