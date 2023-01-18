const { User } = require('../models')

module.exports = {

    find: async function (req, res) {
        try {
            const user = await User.find()
            res.json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    //TODO find: a single user by id

    create: async function (req, res) {
        try {
            const result = await User.create(req.body)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    update: async function (req, res) {
        try {
            const result = await User.findByIdAndUpdate(req.params.id,
                req.body, { new: true })
                res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    delete: async function (req, res) {
        try {
            const result = await User.findByIdAndDelete(req.params.id)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    addFriend: async function (req, res) {
        try {
            const result = await User.findByIdAndUpdate(req.params.id)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    deleteUser: async function (req, res) {
        try {
            const result = await User.findByIdAndDelete(req.params.id)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }

}