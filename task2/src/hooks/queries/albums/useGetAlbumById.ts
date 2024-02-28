import { AlbumsService, PostsService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetAlbumById = (id: number) => {
	return useQuery({
		queryKey: ["albums", id],
		queryFn: () => AlbumsService.getAlbumById(id),
	});
};

export default useGetAlbumById;
