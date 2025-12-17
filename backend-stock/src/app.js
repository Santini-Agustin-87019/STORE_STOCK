import express from "express";
import morgan from "morgan";
import cors from "cors";

// Creamos el servidor - iniciamos la app
const app = express(); // Instancia de Express

// Middlewares
app.use(express.json()); // Para entender JSON en los POST
app.use(cors()); // Habilitar CORS (conexiones entre distintos dominios)
app.use(morgan("dev")); // Logs en consola

// Ruta de prueba para verificar que el servidor funciona
app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando correctamente" });
});

export default app;
