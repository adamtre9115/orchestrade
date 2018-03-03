const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController.js");

// Matches with "/api/inventory"
router.route("/")
  .get(inventoryController.findAll)
  .post(inventoryController.create)

// Matches with "/api/inventory/:id"
router
  .route("/:id")
  .get(inventoryController.findBySchoolId)
  .delete(inventoryController.remove);
  //.put(inventoryController.update)

router
  .route("/category/:search")
  .get(inventoryController.findByCat)

router
  .route("/instruments/:instrument")
  .get(inventoryController.findByInst)


module.exports = router;