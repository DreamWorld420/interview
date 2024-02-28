import { AlbumsService, PostsService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetAllAlbums = () => {
	return useQuery({
		queryKey: ["albums"],
		queryFn: AlbumsService.getAllAlbums,
	});
};

export default useGetAllAlbums;
