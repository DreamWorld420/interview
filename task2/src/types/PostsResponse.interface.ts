import Post from "./Post.interface";
import PostComment from "./PostComment.interface";

interface PostsResponse {
	getAllPosts: Array<Post>;
	getPostById: Post;
	getPostCommentById: Array<PostComment>;
}

export default PostsResponse;
