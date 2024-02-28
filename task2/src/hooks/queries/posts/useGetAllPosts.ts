import { PostsService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetAllPosts = () => {
	return useQuery({
		queryKey: ["posts"],
		queryFn: PostsService.getAllPosts,
	});
};

export default useGetAllPosts;
