const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/auth");
const usersController = require("../controllers/users");
router.get("/list", usersController.getUsersList);
router.get("/me", usersController.getAuthenticatedUser);
router.get("/:id", usersController.getUserById);
module.exports = router;
