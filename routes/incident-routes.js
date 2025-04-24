const express = require("express");

const router = express.Router();

const incidentController = require("../controller/incident-controller");

router.get("/incidents", incidentController.getAllIncidents);
router.get("/incidents/:id", incidentController.getIncidentById);
router.post("/incidents", incidentController.createIncident);
router.delete("/incidents/:id", incidentController.deleteIncident);

module.exports = router;