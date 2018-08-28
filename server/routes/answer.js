const router = require('express').Router()
const { auth } = require('../middleware/auth')
const { createAnswer, getAllAnswer, getOneAnswer, updateAnswer, likeAnswer, dislikeAnswer } = require('../controllers/answer-controller')

router.post('/',auth, createAnswer)
router.get('/:question', getAllAnswer)
router.get('/one/:id', getOneAnswer)
router.put('/:id', updateAnswer)
router.put('/like/:id', likeAnswer)
router.put('/dislike/:id', dislikeAnswer)

module.exports = router