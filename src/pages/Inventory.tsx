import { Activity } from "react"
import AddItemButton from "../components/Buttons/AddItemButton"
import useModal from "../hooks/useModal"
import InventoryForm from "../components/forms/InventoryForm"

const Inventory = () => {
  const {visible, openModal, closeModal} = useModal()

  return (
    <section className="inventory">
      <header className="inventory__header flex">
        <div className="heading">
          <h1>Inventory Management</h1>
          <p>Manage your inventory and stocks levels</p>
        </div>

        <AddItemButton func={openModal} />
      </header>

      <Activity mode={visible ? "visible" : "hidden"}>
        <InventoryForm closeFunc={closeModal} />
      </Activity>

      {/* search functionality */}

      {/* table for inventory with appropriate empty state */}
    </section>
  )
}
export default Inventory