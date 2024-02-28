import { AlbumsService, PostsService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetAlbumPhotosById = async (
	queryClient: QueryClient,
	id: number
) => {
	await queryClient.prefetchQuery({
		queryKey: ["albums", id, "photos"],
		queryFn: () => AlbumsService.getAlbumPhotos(id),
		staleTime: 60 * 1000,
	});
};

export default prefetchGetAlbumPhotosById;
