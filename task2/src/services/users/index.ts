import UsersResponse from "@/types/UsersResponse.interface";
import axiosInstance from "../axiosInstance";

export default {
	getAllUsers: () => {
		return axiosInstance.get<UsersResponse["getAllUsers"]>("/users");
	},
	getUserById: (id: number) => {
		return axiosInstance.get<UsersResponse["getUserById"]>(`/users/${id}`);
	},
	getUserPostsById: (id: number) => {
		return axiosInstance.get<UsersResponse["getUserPostsById"]>(
			`/users/${id}/posts`
		);
	},
	getUserTodosById: (id: number) => {
		return axiosInstance.get<UsersResponse["getUserTodosById"]>(
			`/users/${id}/todos`
		);
	},
	getUserAlbumsById: (id: number) => {
		return axiosInstance.get<UsersResponse["getUserAlbumsById"]>(
			`/users/${id}/albums`
		);
	},
} as const;
