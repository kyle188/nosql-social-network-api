const router = require('express').Router()
const thoughtController = require('../controllers/thoughtController')

router.get('/', thoughtController.find)

router.get('/find/:id', thoughtController.find)

router.post('/', thoughtController.createThought)

router.put('/update/:id', thoughtController.update)

router.delete('/delete/:id', thoughtController.delete)

router.post('/:thoughtId/reactions', thoughtController.createReaction)

router.delete('/:thoughtId/reactions/:reactionId', thoughtController.delete)


module.exports = router



// `GET` to get all thoughts

// * `GET` to get a single thought by its `_id`

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

// ```json
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// ```

// * `PUT` to update a thought by its `_id`

// * `DELETE` to remove a thought by its `_id`

// ---

// **`/api/thoughts/:thoughtId/reactions`**

// * `POST` to create a reaction stored in a single thought's `reactions` array field

// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value