const express = require('express');
const PratosController = require("./controllers/PratosController");


const routes = express.Router();

routes.get("/pratos-list", PratosController.index);
routes.post("/pratos-list/", PratosController.store);


module.exports = routes;
