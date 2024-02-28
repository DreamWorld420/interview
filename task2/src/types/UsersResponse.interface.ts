import Post from "./Post.interface";
import UserAlbum from "./UserAlbum.interface";
import UserTodo from "./UserTodo.interface";

interface UsersResponse {
	getAllUsers: Array<User>;
	getUserById: User;
	getUserPostsById: Array<Post>;
	getUserTodosById: Array<UserTodo>;
	getUserAlbumsById: Array<UserAlbum>;
}

export default UsersResponse;
