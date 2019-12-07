const express = require('express');

const routes = express.Router();

routes.get("/pratos-list", PratosController.index);
routes.post("/pratos-list/", PratosController.store);


module.exports = routes;
