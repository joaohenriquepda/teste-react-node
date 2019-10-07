'use strict'

const Post = use('App/Models/Post');
const CloudinaryService = use('App/Services/CloudinaryService');

class PostController {

  async index( {response}) {
    const posts = await Post.all()

    return posts
  }
    
      async create( {request, response, session, auth}) {
          
        const { body } = request.all();
        const file = request.file('file');
      
        try {
          const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(file.tmpPath, {folder: 'postsapp'});
          let post = new Post();
          let authUser = await auth.getUser();
          post.user_id = authUser.id;
          post.title = "title";
          post.body = body;
          post.image_url = cloudinaryResponse.secure_url;
          await post.save();
        } catch (e) {
            console.log(e);
            session.flash({error: 'Error Uploading Image'});
        }
      }
}

module.exports = PostController
