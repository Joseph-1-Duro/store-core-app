// summons a pop-up form to handle the product detail

import { Plus } from "lucide-react"

const AddItemButton = ({ func }: { func: () => void }) => {
  return (
    <button onClick={func} id="add-btn" className="add-btn flex">
      <Plus aria-hidden />
      Add Item
    </button>
  )
}
export default AddItemButton