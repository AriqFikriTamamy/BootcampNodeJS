import express from "express";
// import { run } from "./db";
import connectDB from "./db";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes"

const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
