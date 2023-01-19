const mongoose = require('mongoose')
const moment = require('moment')

const ReactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},  {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
    }
)



const ThoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: "A Thought Is Required",
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at} hh:mm a')
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: {
        type: String,
        required: "Must Enter a userName"
    },
    reactions: [ReactionSchema]
}, 
{
    toJSON: {
        getters: true
    },
    timestamps: true
}
)

ThoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length
})

const Thought = mongoose.model('Thought', ThoughtSchema)

module.exports = Thought