backend-stock/
├── node_modules/       # (Se crea solo al instalar librerías)
├── src/
│   ├── config/         # Aquí va la conexión a la DB (antes hacías esto en sequelize config)
│   ├── controllers/    # La LÓGICA. Aquí "desarmamos" el JSON y decidimos qué hacer.
│   ├── models/         # Los ESQUEMAS. Aquí definimos qué campos tiene un Producto.
│   ├── routes/         # Las RUTAS. Define las URLs (GET /productos, POST /ventas).
│   ├── utils/          # Pequeñas funciones de ayuda (ej: formatear fechas).
│   ├── app.js          # Configuración de Express (Middlewares, CORS).
│   └── index.js        # El punto de entrada. Arranca el servidor.
├── .env                # Variables de entorno (puerto, clave de la DB).
├── .gitignore          # Para no subir node_modules a GitHub.
└── package.json        # Lista de dependencias.