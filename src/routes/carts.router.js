import Router from "express";
import CartManager from "../clases/CartManager.js";

const router = Router();
const rutaDatos = "./src/clases/files/carts.json";
const cartManager = new CartManager(rutaDatos);

router.get("/carts", (req, resp) => {
  const productos = cartManager.getCarts();
  resp.status(201).json(productos);
});

router.get("/carts/:idCarrito", async (req, resp) => {
  let idCarrito = req.params.idCarrito;

  let carrito = await cartManager.getCartById(idCarrito);

  resp.status(201).json(carrito);
});
router.post("/carts/:id/:product/:idProduct", async (req, resp) => {
  const { id, product, idProduct } = req.body;
  console.log(req.body);
  //const product = cartManager.addProduct(id, productCart, idProduct);
  const carts = await cartManager.addProductToCart(id, product, idProduct);
  console.log(carts);
  resp.status(201).json(carts);
});

router.post("/carts", async (req, resp) => {
  const carts = await cartManager.addCart();

  resp.status(201).json(carts);
});

export default router;
