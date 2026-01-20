import mongoose, {Schema} from 'mongoose';

const videoSchema = new Schema({
    videoFile : {
        type: String,  //Cloudinary url
        required: true,
    },
    thumbnail : {
        type: String,  //Cloudinary url
        required: true,
    },
    title : {
        type: String,
        required: true,
        
    },
    description : {
        type: String,
        required: false,
    },
    duration : {
        type: Number, // in seconds(cloudinary returns duration in seconds)
        required: true,
    },
    views : {
        type: Number,
        default: 0,
    },
    isPublished : {
        type: Boolean,
        default: true,
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true});

export const Video = mongoose.model('Video',  videoSchema);