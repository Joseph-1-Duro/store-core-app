import { z } from "zod";

export const inventorySchema = z.object({
  productName: z.string().min(3, "At least 3 characters long"),
  costPrice: z.number("Must be a number").positive("Must be a greater than 0"),
  sellPrice: z.number("Must be a number").positive("Must be a greater than 0"),
  sku: z.string().min(3, "At least 3 characters long"),
  category: z.enum(["electronics", "fashion", "beverages", "grocery", "medicine", "stationary", "auto-mobiles"], "Pick a category"),
  lowStockThreshold: z.number("Must be a number").positive("Must be greater than 0"),
}).refine(
  (data) => data.sellPrice > data.costPrice, {
    message: "Sell Price must be larger than Cost Price",
    path: ["sellPrice"]
  }
);

export type Product = z.infer<typeof inventorySchema>

// export const inventorySchema = z.object({
//   category: z.string(),
//   sku: z.string().optional(),
//   lowStockThreshold: z.number().optional(),
// });

// export type Product = z.infer<typeof inventorySchema>;