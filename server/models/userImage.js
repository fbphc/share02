
import mongoose from 'mongoose';

const userImageSchema = new mongoose.Schema({
    image: {type: String},
    imgID: {type: Number},
    userID: {type: Number},
    imgName: {type: String}
})

const userImage = mongoose.model('userImage', userImageSchema)

export default userImage;