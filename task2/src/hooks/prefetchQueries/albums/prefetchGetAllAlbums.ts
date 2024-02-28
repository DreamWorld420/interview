import { AlbumsService, PostsService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetAllAlbums = async (queryClient: QueryClient) => {
	await queryClient.prefetchQuery({
		queryKey: ["albums"],
		queryFn: AlbumsService.getAllAlbums,
		staleTime: 60 * 1000,
	});
};

export default prefetchGetAllAlbums;
