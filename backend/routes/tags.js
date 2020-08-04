const express = require("express");
const router = express.Router();
const { create, list, read, remove } = require("../controllers/tags");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

// validators
const { runValidation } = require("../validators");
const { tagsCreateValidator } = require("../validators/tags");

//create a tag
router.post(
  "/tag",
  tagsCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

// get all tags
router.get("/tags", list);

// get a single tag
router.get("/tag/:slug", read);

// delete a tag
router.delete("/tag/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
