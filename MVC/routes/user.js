const express = require("express");
const {
  handleGetAllUsers,
  handleUpdateUserById,
  handleUpdateUserById,
  handleCreateNewUser,
} = require("../controllers/user");
const User = require("../models/user");
const res = require("express/lib/response");

const router = express.Router();

//Sending HTML document
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

//Sending Json document
router.route("/:id").get(handleGetAllUsers).patch(handleUpdateUserById);

module.exports = router;
