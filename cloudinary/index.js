const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_names,
    api_key: process.env.cloudinary_keys,
    api_secret: process.env.cloudinary_secrets
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'colt YelpCamp',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}