const express = require("express");

const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");

const clientesRoutes =
    require("./src/routes/clientes.routes");


const app = express();

const PORT = process.env.PORT || 8080;


// Middleware para JSON

app.use(express.json());


// Rota principal

app.get("/", (req, res) => {

    res.json({
        projeto: "API Clientes Node.js",
        status: "API funcionando",
        swagger: "/swagger"
    });

});


// Swagger

app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


// Clientes

app.use(
    "/api/clientes",
    clientesRoutes
);


// Inicialização

app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `API executando na porta ${PORT}`
    );

    console.log(
        `Swagger: http://localhost:${PORT}/swagger`
    );

});