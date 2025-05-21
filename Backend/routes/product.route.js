import express from 'express';
import { createProduct } from '../controller/product.controller.js';
import { getProducts } from '../controller/product.controller.js';
import { updateProduct } from '../controller/product.controller.js';
import { deleteProduct } from '../controller/product.controller.js';

const router = express.Router();
router.get("/",getProducts);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);


export default router;