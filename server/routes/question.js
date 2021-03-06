const router = require('express').Router()
const { createQuestion, getAllQuestion, getOneQuestion, deleteQuestion, getMyQuestions, updateQuestion, likeQuestion, dislikeQuestion } = require('../controllers/question-controller')
const { auth } = require('../middleware/auth')

router.post('/', auth, createQuestion)
router.get('/', getAllQuestion)
router.get('/me',auth, getMyQuestions)
router.get('/:id', getOneQuestion)
router.put('/:id', auth, updateQuestion)
router.delete('/:id', auth, deleteQuestion)
router.put('/like/:id', likeQuestion)
router.put('/dislike/:id', dislikeQuestion)

module.exports = router