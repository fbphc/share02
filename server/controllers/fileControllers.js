import userImage from "../models/userImage.js";

const getFile = async (req, res) => {
  const { userId } = req.body;
  const Id = (await userImage.find()).length + 1;

  try {
    const image = await userImage.create({
      image: req.file.path,
      imgID: Id,
      userID: userId,
      imgName: "avatarImg"
    });
    

    res.status(200).json({
      message: "Created image successfully",
      image,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export default getFile;
