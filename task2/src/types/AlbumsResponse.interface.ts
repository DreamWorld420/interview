import AlbumPhoto from "./AlbumPhoto.interface";
import UserAlbum from "./UserAlbum.interface";

export interface AlbumsResponse {
	getAllAlbums: Array<UserAlbum>;
	getAlbumById: UserAlbum;
	getAlbumPhotosById: Array<AlbumPhoto>;
}
