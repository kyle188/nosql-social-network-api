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
    getSingleUser: async function (req, res) {
        try {
            const user = await User.findById({
                _id: req.params.id
            })
            .select('-v')
            res.json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    create: async function (req, res) {
        try {
            const result = await User.create(req.body)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    
    updateUser: async function (req, res) {
        try {
          const result = await User.findOneAndUpdate(
            { _id: req.params.userId },
            {
              $set: req.body,
            },
            {
              runValidators: true,
              new: true,
            }
          )
          res.json(result)
        } catch(err) {
          res.status(500).json(err)
        }
      },

    deleteUser: async function (req, res) {
        try {
            const result = await User.findByIdAndDelete({
                _id: req.params.id
            })
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
}