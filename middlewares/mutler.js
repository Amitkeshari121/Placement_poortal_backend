import multer from "multer";

const storage = multer.memoryStorage();
export const singleUpload = multer({ storage }).single("file");

//Multer is primarily used for uploading the files in node js

// memorystorage is a storage engine provided by multer that stroes the uploaded files i memory as buffer

//when a client upload a file to an endpoint that uses he singleupload middleware .The middleware pricesses the file and store it in a memory

//The file can be accesses in the request habdler through req.file