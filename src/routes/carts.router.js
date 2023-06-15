import Router from "express";
import CartManager from "../clases/CartManager.js";

const router = Router();
const rutaDatos = "./src/clases/files/productos.json";
const cartManager = new CartManager(rutaDatos);

router.get("/carts", (req, resp) => {
  const productos = cartManager.getProducts();
  resp.status(201).json(productos);
});

router.post("/carts", (req, resp) => {
  const { id, productCart, idProduct } = req.body;
  const product = cartManager.addProduct(id, productCart, idProduct);
});

export default router;
