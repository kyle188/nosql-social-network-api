const { Thought } = require('../models')

module.exports = {

    find: async function (req, res) {
        try {
            const thought = await Thought.find()
            res.json(thought)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    findSingleThought: async function (req, res) {
        try {
            const thought = await Thought.findById({
                    _id: req.params.id
                })
            res.json(thought)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    //POST to create a new thought(remember to push the created thoughts _id to the associated user's thoughts array field)

    createThought: async function (req, res) {
        try {
            const result = await Thought.create(req.body)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    //PUT to update a thought by its _id

    update: async function (req, res) {
        try {
            const result = await Thought.findByIdAndUpdate(req.params.id,
                req.body, { new: true })
                res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    
    //DELETE to remove a thought by it's _id

    delete: async function (req, res) {
        try {
            const result = await Thought.findByIdAndDelete(req.params.id)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // POST to create a reaction stored in a single thought's array field

    createReaction: async function (req, res) {
        try {
            const result = await Thought.create(req.body)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    //DELETE to pull and remove a reaction by the reaction's reactionId value

    deleteReaction: async function (req, res) {
        try {
            const result = await Thought.findByIdAndDelete(req.params.id)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}