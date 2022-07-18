const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    dateJoined: {
        type: Date,
        required:true
    },
    pets: [
        {type: mongoose.Schema.Types.ObjectId}
    ],
    points: {
        type: Number,
        required:true
    }, 
    bio: {
        type: String
    },
    coins: {
        type: Number,
        required:true
    },
    inventory: {
        soap: {
            type: Number, 
            required: true
        },
        treats: {
            type: Number,
            required:true
        }
    }
}, {
    timestamps: true
})
const User = mongoose.model("users", UserSchema)
module.exports=User;