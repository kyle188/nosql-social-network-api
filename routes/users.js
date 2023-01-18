const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.find);

router.get('/:id', userController.getSingleUser);

router.post('/', userController.create);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router