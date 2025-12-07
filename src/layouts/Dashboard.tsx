import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
    return (
        <div className="dashboard-layout grid">
            <Sidebar />
            <main id="main">
                <Outlet />
            </main>
        </div>
    )
}
export default Dashboard