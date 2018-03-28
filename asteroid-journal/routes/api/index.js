const router = require("express").Router();
const observationRoutes = require("./observation");

// Observation routes
router.use("/observation", observationRoutes);

module.exports = router;
