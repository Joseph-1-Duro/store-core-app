import { Navigate, Outlet } from "react-router"
import useAuthStore from "../store/AuthStore"

const PublicRoute = () => {
    const user = useAuthStore(state => state.user);

    if (user) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}
export default PublicRoute