const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: "A username is required",
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: "An email is required",
        unique: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address']
    },
    thoughts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Thought'
    },
    ],
    friends: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
},
{
    toJSON: {
      virtuals: true,
    },
    timestamps: true
  
  })

UserSchema.virtual('friendCount')
.get(function() {
    return this.friends.length
})

const User = mongoose.model('User', UserSchema)

module.exports = User