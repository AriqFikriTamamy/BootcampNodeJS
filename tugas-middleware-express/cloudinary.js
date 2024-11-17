const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dl8nqyrux",
    api_key: "435198912823999",
    api_secret: "yyxIxpQyWfSOuI0dj7B1xFl5LoU"
})

module.exports = cloudinary;