const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinaryConfig');
const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params: {
        folder: 'tara_art_class',

        // allowed_formats: ['jpg', 'png', 'jpeg'],
    },
});

const upload = multer({ storage });

module.exports = upload;
