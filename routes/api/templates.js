const router = require("express").Router();
const templatesController = require("../../controllers/templatesController.js");

// Matches with "/api/templates"
router.route("/")
  .get(templatesController.findAll)

router.route("/:id")
  .get(templatesController.findById)
  

module.exports = router;