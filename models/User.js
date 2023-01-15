const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    },
    ],
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

UserSchema.virtual('friendCount')
.get(function() {
    return this.friends.length
})

const User = mongoose.model('User', UserSchema)

module.exports = User