import { X } from "lucide-react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { inventorySchema, type Product } from "../../schema/inventorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase/firebaseConfig";
import Toast from "../../lib/toastService";
import useAuthStore from "../../store/AuthStore";


const InventoryForm = ({ closeFunc }: { closeFunc: () => void }) => {
    const userId = useAuthStore(state => state.user?.uid);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Product>({
        resolver: zodResolver(inventorySchema)
    });

    const formSubmit: SubmitHandler<Product> = async (data) => {
        if (!userId) {
            Toast.error("User isn't authenticated")
            return
        }

        const userProductRef = collection(db, "users", userId, "product")

        const addProductPromise = addDoc(userProductRef, {
            ...data,
            lastUpdate: serverTimestamp()
        })

        Toast.promise(
            addProductPromise, {
                loading: "Saving Products...",
                success: "Product saved successfully",
                error: "Failed to add product"
            }
        )

        try {
            await addProductPromise;
            reset()

            setTimeout(() => {
                closeFunc()
                Toast.success("Product added")
            }, 1000)
        } catch (error){
            console.log(error)
        }
    }

    // TODO make the number input look like text input

    return (
        <div className="inventory-form-container">
            <div className="overlay"></div>

            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="form-header flex">
                    <h3>Product</h3>

                    <button className="close-btn" type="button" onClick={closeFunc}><X /></button>
                </div>

                <div className="form-group">
                    <div className="label-group span-2">
                        <label htmlFor="name-input">Product Name</label>
                        <input
                            {...register("productName")}
                            type="text"
                            id="name-input"
                        />
                        {
                            errors.productName &&
                            <small role="alert">{errors.productName.message}</small>
                        }
                    </div>

                    <div className="label-group">
                        <label htmlFor="cost-input">Cost Price</label>
                        <input
                            {...register("costPrice", { valueAsNumber: true })}
                            type="number"
                            id="cost-input"
                        />
                        {
                            errors.costPrice &&
                            <small role="alert">{errors.costPrice.message}</small>
                        }
                    </div>

                    <div className="label-group">
                        <label htmlFor="sell-input">Sell Price</label>
                        <input
                            {...register("sellPrice", { valueAsNumber: true })}
                            type="number"
                            id="sell-input"
                        />
                        {
                            errors.sellPrice &&
                            <small role="alert">{errors.sellPrice.message}</small>
                        }
                    </div>

                    <div className="label-group span-2">
                        <label htmlFor="threshold-input">Low Stock Threshold</label>
                        <input
                            {...register("lowStockThreshold", { valueAsNumber: true })}
                            type="number"
                            id="threshold-input"
                        />
                        {
                            errors.lowStockThreshold &&
                            <small role="alert">{errors.lowStockThreshold.message}</small>
                        }
                    </div>

                    <div className="label-group">
                        <label htmlFor="sku-input">SKU</label>
                        <input
                            {...register("sku")}
                            type="text"
                            id="sku-input"
                        />
                        {
                            errors.sku &&
                            <small role="alert">{errors.sku.message}</small>
                        }
                    </div>

                    <div className="label-group">
                        <label htmlFor="category-input">Category</label>
                        <select
                            {...register("category")}
                            defaultValue=""
                        >
                            <option value="" disabled>Select a Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="beverages">Beverages</option>
                            <option value="grocery">Grocery</option>
                            <option value="medicine">Medicine</option>
                            <option value="stationary">Stationary</option>
                            <option value="auto-mobiles">Auto Mobiles</option>
                        </select>
                        {
                            errors.category &&
                            <small role="alert">{errors.category.message}</small>
                        }
                    </div>
                </div>


                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default InventoryForm