import { Navigate, Outlet } from "react-router"
import useAuthStore from "../store/AuthStore"

const ProtectedRoute = () => {
    const user = useAuthStore(state => state.user);
    const isLoading = useAuthStore(state => state.isLoading);

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}
export default ProtectedRoute