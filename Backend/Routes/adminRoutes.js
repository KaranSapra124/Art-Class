const express = require("express");
const { addCourse, getCourse, getUsers, deleteUsers, addWorkshopContent } = require("../Controllers/adminController");
const upload = require('../utils/multerConfig')
const router = express.Router(); // It's common to use lowercase for 'router'

router.post("/add-course", addCourse);
router.get("/get-course", getCourse);
router.get("/get-users", getUsers)
router.get("/delete-users/:id", deleteUsers)
router.post("/add-art-workshop/:type", upload.single('image'), addWorkshopContent)
// router.post("/auth-user", authUser);
// router.post("/add-lead", addContact);
module.exports = router;
