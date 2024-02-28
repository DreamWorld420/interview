import { PostsService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetAllPosts = async (queryClient: QueryClient) => {
	await queryClient.prefetchQuery({
		queryKey: ["posts"],
		queryFn: PostsService.getAllPosts,
		staleTime: 60 * 1000,
	});
};

export default prefetchGetAllPosts;
