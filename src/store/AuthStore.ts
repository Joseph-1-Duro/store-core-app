import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User } from "../types/user"

// add isAuthenticated 

interface AuthState {
    user: User | null;
    isLoading: boolean;
    isError: boolean;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: boolean) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isLoading: false,
            isError: false,
            setUser: (user) => {
                set({
                    user,
                    isLoading: false,
                    isError: false,
                })
            },
            setLoading: (loading) => set({ isLoading: loading }),
            setError: (error) => set({ isError: error, isLoading: false }),
            logout: () => set({ user: null, isLoading: false, isError: false }),
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({ user: state.user })
        }
    )
)

export default useAuthStore