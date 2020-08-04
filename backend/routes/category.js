const express = require("express");
const router = express.Router();
const { create, list, read, remove } = require("../controllers/category");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

// validators
const { runValidation } = require("../validators");
const { categoryCreateValidator } = require("../validators/category");

//create a category
router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

// get all categories
router.get("/categories", list);

// get a single category
router.get("/category/:slug", read);

// delete a category
router.delete("/category/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
