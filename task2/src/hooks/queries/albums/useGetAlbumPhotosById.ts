import { AlbumsService, PostsService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetAlbumPhotosById = (id: number) => {
	return useQuery({
		queryKey: ["albums", id, "photos"],
		queryFn: () => AlbumsService.getAlbumPhotos(id),
	});
};

export default useGetAlbumPhotosById;
