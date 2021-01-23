const Post = require('../model/post_module.js')
exports.showIndex = (req,res,next) => {
	res.send('wow, i am node api from controllers folder')
}

exports.addPost = (req, res, next) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
		image: req.body.image
	}).then(result => {
		return result.save()
	}).then(()=> {
		res.send('post added successfully')
	}).catch(err=> {
		res.status(400).send(err)
	})
}

exports.showPost = (req, res, next) => {
	Post.find().then(result => {
		res.send(result)
	}).catch(err=>{
		res.status(400).send(err)
	})
}

exports.singlePost = (req, res, next) => {
	Post.findById(req.params.id).then(result => {
		res.send(result)
	}).catch(err => {
		res.status(400).send(err)
	})
}

exports.updatePost = (req, res, next) => {
	Post.findById(req.body.id).then(result => {
		result.title = req.body.title
		result.description = req.body.description
		result.image = req.body.image
	}).then(()=> {
		res.send('post updated successfully!')
	}).catch(err=> {
		res.status(400).send(err)
	})

}




exports.deletePost = (req, res, next) => {
	Post.findByIdAndRemove(req.params.id).then(()=>{
		res.send('post deleted')
	}).catch(err=> {
		res.status(400).send(err)
	})

}
