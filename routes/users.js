const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.find);

router.post('/', userController.create);

router.put('/update/:id', userController.update);

router.delete('/delete/:id', userController.delete);

module.exports = router