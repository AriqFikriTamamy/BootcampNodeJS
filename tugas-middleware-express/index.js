const express = require("express");
const fileUpload = require("express-fileupload");
// const cloudinary = require("./cloudinary");

const port = 3000;
const app = express();

// // middlware for grant access upload
// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
// }));

// // register route
// app.post("/upload", (req, res) => {
//     const {
//         photo
//     } = req.files;

//     if (!photo) {
//         res.status(400).json({
//             status: 404,
//             message: "Photo is required"
//         });
//     }

//     cloudinary.v2.uploader.upload(photo.tempFilePath, {
//         public_id: new Date().getTime(),
//     }, (error, result) => {
//         if (error) {
//             res.status(500).json({
//                 status: 500,
//                 message: "Upload failed",
//                 error
//             });
//         } else {
//             res.json({
//                 status: 200,
//                 message: "Success",
//                 result
//             });
//         };
//     });
// });

const cloudinary = require('cloudinary').v2;

(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: 'dl8nqyrux',
        api_key: '435198912823999',
        api_secret: 'yyxIxpQyWfSOuI0dj7B1xFl5LoU' // Click 'View API Keys' above to copy your API secret
    });

    // Upload an image
    // const uploadResult = await cloudinary.uploader
    //     .upload(
    //         'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //             public_id: 'shoes',
    //         }
    //     )
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // console.log(uploadResult);

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });

    console.log(optimizeUrl);

    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });

    console.log(autoCropUrl);
})();

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

app.post("/upload", (req, res) => {
    const {
        photo
    } = req.files;

    if (!photo) {
        res.status(400).json({
            status: 404,
            message: "Photo is required"
        });
    }

    cloudinary.v2.uploader.upload(photo.tempFilePath, {
        public_id: new Date().getTime(),
    }, (error, result) => {
        if (error) {
            res.status(500).json({
                status: 500,
                message: "Upload failed",
                error
            });
        } else {
            res.json({
                status: 200,
                message: "Success",
                result
            });
        };
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});