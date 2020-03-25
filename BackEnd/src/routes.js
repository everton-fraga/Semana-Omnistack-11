const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController"); //ctrl+d
const ProfileController = require("./controllers/ProfileController"); //ctrl+d
const SessionController = require("./controllers/SessionController"); //ctrl+d

const routes = express.Router();
routes.post("/sessions", SessionController.create);

routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
