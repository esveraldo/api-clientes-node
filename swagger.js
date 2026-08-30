const swaggerJsdoc = require("swagger-jsdoc");

const options = {

    definition: {

        openapi: "3.0.0",

        info: {
            title: "API de Clientes",
            version: "1.0.0",
            description:
                "API REST desenvolvida com Node.js, Express e Docker"
        },

        servers: [
            {
                url: "http://localhost:8080",
                description: "Servidor local"
            }
        ]

    },

    apis: [
        "./src/routes/*.js"
    ]

};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;