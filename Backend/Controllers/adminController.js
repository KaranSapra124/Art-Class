const Courses = require("../Models/courseSchema");
const Users = require("../Models/userSchema")
const artWorkshop = require("../Models/artWorkshopSchema")
const cloudinary = require('../utils/cloudinaryConfig')
module.exports.addCourse = async (req, res) => {
  const newCourse = await Courses.create(req.body);
  return res.status(201).send({ message: "New Course Added", newCourse });
};

module.exports.getCourse = async (req, res) => {
  const CoursesData = await Courses.find();
  return res.status(201).send({ message: "New Course Added", CoursesData });
};

module.exports.getUsers = async (req, res) => {
  const UsersData = await Users.find();
  // console.log(UsersData)
  if (!UsersData) return res.status(401).send({ message: "No Users Found!" })
  return res.status(200).send({ message: "Users Fetched Successfully!", data: UsersData })
}

module.exports.deleteUsers = async (req, res) => {
  const { id } = req.params;
  await Users.findByIdAndDelete(id);
  const users = await Users.find()
  console.log(users)
  return res.status(200).send({ message: "Deleted Successfully!", data: users })
}

module.exports.addWorkshopContent = async (req, res) => {
  try {
    const { type } = req.params

    const newData = await artWorkshop.create({ ...req.body, sectionType: type, imageUrl: req.file?.path })
    return res.status(201).send({ message: "Data Created!", newData })

  } catch (err) {
    return res.status(401).send({ message: "Unable To Add!" })
  }
}
module.exports.getWorkshopContent = async (req, res) => {
  try {
    const { type } = req.params
    const data = await artWorkshop.find({ sectionType: type });
    return res.status(200).send({ message: "Data fetched ✔", data })
  } catch (err) {
    return res.status(401).send({ message: "Error while fetching!" })
  }
}
module.exports.deleteArtWorkshop = async (req, res) => {
  const { id } = req.params;
  const dataToDelete = await artWorkshop.findById(id)
  const parts = dataToDelete?.imageUrl?.split('/');
  // console.log(parts,'DATATATAT')
  // const folderIndex = parts?.findIndex(part => part === 'upload') + 1;
  // const publicIdWithExtension = parts?.slice(parts.length)?.join('/'); // e.g. "tara_art_class/sample_image.jpg"
 
  const publicId = parts[parts.length - 1]?.replace(/\.[^/.]+$/, '');   // remove extension (e.g. .jpg)

  const result = await cloudinary?.uploader?.destroy(`tara_art_class/${publicId}`);

  await artWorkshop.findByIdAndDelete(id);
  // const data = await artWorkshop.find({sectionType:})

  return res.status(200).send({ message: "Deleted Successfully!" })
}