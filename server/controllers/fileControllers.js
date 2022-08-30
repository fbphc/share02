import userImage from "../models/userImage.js";

const getFile = (req, res) => {
    const image = new userImage({
      image: req.file.path
    })
    image
      .save()
      .then(result => {
        res.status(201).json({
          message: "Created image successfully",
          createdImage: {
  
            request: {
              type: 'GET',
              url: "http://localhost:5006/user/testing" + result
            }
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
}
  
export default getFile