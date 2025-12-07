import { useNavigate } from "react-router";
import { signInWithGoogle } from "../../lib/firebase/auth";
import Toast from "../../lib/toastService";

const GoogleButton = () => {
    const navigate = useNavigate();

    const handleClick = async () => {
        const success = await signInWithGoogle()

        if (success) {
            navigate("/", { replace: true })
            // add success toast
        } else {
            // drop if not success state
            Toast.error("Network error!!")
        }
    }

    return (
        <button
            onClick={handleClick}
            type="button"
            className="google-button"
        >
            Continue with Google
        </button>
    )
}
export default GoogleButton