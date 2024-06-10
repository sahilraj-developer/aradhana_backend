import app from "./app.js";
import cloudinary from 'cloudinary';


cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_CLIENT_NAME,
    cloud_key : process.env.CLOUDINARY_CLIENT_API_KEY,
    cloud_secret_key: process.env.CLOUDINARY_CLIENT_SECRET_KEY
})

app.listen(process.env.PORT, ()=>{
console.log(`Server running on port ${process.env.PORT}`)
})