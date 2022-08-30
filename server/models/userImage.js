import mongoose from 'mongoose';

const userImageSchema = new mongoose.Schema({
    image: {type: String}
})

const userImage = mongoose.model('userImage', userImageSchema)

export default userImage