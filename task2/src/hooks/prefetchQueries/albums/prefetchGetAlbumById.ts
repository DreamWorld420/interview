import { AlbumsService, PostsService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetAlbumById = async (queryClient: QueryClient, id: number) => {
	await queryClient.prefetchQuery({
		queryKey: ["albums", id],
		queryFn: () => AlbumsService.getAlbumById(id),
		staleTime: 60 * 1000,
	});
};

export default prefetchGetAlbumById;
