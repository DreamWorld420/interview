import { UsersService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetUserPostsById = async (
	queryClient: QueryClient,
	id: number
) => {
	await queryClient.prefetchQuery({
		queryKey: ["users", id, "posts"],
		queryFn: () => UsersService.getUserPostsById(id),
		staleTime: 60 * 1000,
	});
};

export default prefetchGetUserPostsById;
