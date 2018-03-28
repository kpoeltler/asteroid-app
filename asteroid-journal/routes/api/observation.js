const router = require("express").Router();
const entryController = require("../../controllers/entryController");

// Matches with "/api/observation"
router.route("/")
  .post(entryController.create)
  .get(entryController.findAll);
  

// Matches with "/api/observation/:id"
router
  .route("/:id")
  .get(entryController.findById)
  .put(entryController.update)
  .delete(entryController.remove);

module.exports = router;
