const express = require('express')
const {showIndex, addPost, singlePost, updatePost, deletePost} = require('../controller/post_controller')
const router = express.Router()

router.get('/',showIndex)

router.post('/add-post',addPost)

router.get('/add-post',addPost)

router.get('/single-post/:id',singlePost)

router.patch('/update-post',updatePost)

router.delete('/remove-post/:id',deletePost)

module.exports = router


