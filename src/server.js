import express from "express";
import ProductManager from "./clases/ProductManager.js";
import productsRoutes from "./routes/productos.router.js";
import cartsRoutes from "./routes/carts.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productsRoutes);
app.use("/api", cartsRoutes);

app.get("/", (req, resp) => {
  resp.send(
    "Servidor Arriba!!! pruebe con =  /productos , /productos/# o /productos?limit=#"
  );
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
