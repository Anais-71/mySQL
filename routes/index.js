import { Router } from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../handlers/index.js';

const appRouter = Router();

appRouter.get("/", getAllProducts); // api/products => [...]
appRouter.get("/:id", getProduct); // api/products/id
appRouter.post("/create", createProduct);
appRouter.put("/update/:id", updateProduct); // :id => req.params.id
appRouter.delete("/delete/:id", deleteProduct);

export default appRouter