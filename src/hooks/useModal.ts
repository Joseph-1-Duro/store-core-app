import { useState } from "react"

const useModal = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);
    const toggleModal = () => setVisible(prev => !prev)

    return {
        visible,
        openModal,
        closeModal,
        toggleModal
    }
}

export default useModal