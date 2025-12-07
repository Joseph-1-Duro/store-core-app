import { doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"


import { auth, db } from "./firebaseConfig";

import useAuthStore from "../../store/AuthStore";

export const signInWithGoogle = async () => {
    useAuthStore.getState().setLoading(true);
    
    try {
        const provider = new GoogleAuthProvider();        
        const { user } = await signInWithPopup(auth, provider);

        // check if user exists
        const userDocRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDocRef);

        if (!docSnap.exists()) {
            await setDoc(userDocRef, {
                displayName: user.displayName,
                email: user.email,
                id: user.uid,
                createdAt: new Date(),
            })
        }

        // setUser changes loading & error to false confirm later
        useAuthStore.getState().setUser({
            uid: user.uid ?? null,
            email: user.email ?? null,
            displayName: user.displayName ?? null,
            // photo: user.photoURL,
        })

        return true
    } catch (error) {
        useAuthStore.getState().setError(true);

        console.log(error)
        console.error(error);
        return false
    }
}