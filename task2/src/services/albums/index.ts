import UserAlbum from "@/types/UserAlbum.interface";
import axiosInstance from "../axiosInstance";
import { AlbumsResponse } from "@/types/AlbumsResponse.interface";

export default {
	getAllAlbums: () => {
		return axiosInstance.get<AlbumsResponse["getAllAlbums"]>("/albums");
	},
	getAlbumById: (id: number) => {
		return axiosInstance.get<AlbumsResponse["getAlbumById"]>(`/albums/${id}`);
	},
	getAlbumPhotos: (id: number) => {
		return axiosInstance.get<AlbumsResponse["getAlbumPhotosById"]>(
			`/albums/${id}/photos`
		);
	},
} as const;
