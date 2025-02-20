const express = require("express");
const middlewareValidationId = require("../middlewares/validationIdParam");
const postController = require("../controllers/postController");
const router = express.Router();

// Middleware per verificare il parametro ID delle rotte

router.use("/:id", middlewareValidationId);

// Index

router.get("/", postController.index);

// Show

router.get("/:id", postController.show);

// Store

router.post("/", postController.store);

// Update

router.put("/:id", postController.update);

// Modify

router.patch("/:id", postController.modify);

// Delete

router.delete("/:id", postController.destroy);

module.exports = router;
