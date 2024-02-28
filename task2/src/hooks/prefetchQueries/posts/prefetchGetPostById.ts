import { PostsService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetPostById = async (queryClient: QueryClient, id: number) => {
	await queryClient.prefetchQuery({
		queryKey: ["posts", id],
		queryFn: () => PostsService.getPostById(id),
		staleTime: 60 * 1000,
	});
};

export default prefetchGetPostById;
