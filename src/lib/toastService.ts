import toast, { type ToastOptions } from "react-hot-toast";

const Toast = {
    success: (message: string, option?: ToastOptions) => toast.success(message, option),

    error: (message: string, option?: ToastOptions) => toast.error(message, option),

    loading: (message: string, option?: ToastOptions) => toast.loading(message, option),

    dismiss: (id?: string) => toast.dismiss(id),

    promise: <T>(
        promise: Promise<T>,
        message: {
            loading: string,
            success: string,
            error: string
        },
        option?: ToastOptions
    ) => toast.promise(promise, message, option)

}

export default Toast