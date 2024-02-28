import { PostsService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetPostCommentById = async (
	queryClient: QueryClient,
	id: number
) => {
	await queryClient.prefetchQuery({
		queryKey: ["posts", id, "comments"],
		queryFn: () => PostsService.getPostCommentById(id),
		staleTime: 60 * 1000,
	});
};

export default prefetchGetPostCommentById;
