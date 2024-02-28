import PostsResponse from "@/types/PostsResponse.interface";
import axiosInstance from "../axiosInstance";

export default {
	getAllPosts: () => {
		return axiosInstance.get<PostsResponse["getAllPosts"]>("/posts");
	},
	getPostById: (id: number) => {
		return axiosInstance.get<PostsResponse["getPostById"]>(`/posts/${id}`);
	},
	getPostCommentById: (id: number) => {
		return axiosInstance.get<PostsResponse["getPostCommentById"]>(
			`/posts/${id}/comments`
		);
	},
} as const;
