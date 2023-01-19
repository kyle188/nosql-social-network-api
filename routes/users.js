const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.findUsers);

router.get('/:id', userController.getSingleUser);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.put('/addFriend/:id', userController.addFriend)

router.put('/deleteFriend/:id', userController.deleteFriend)

module.exports = router