import { UsersService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetUserTodosById = async (
	queryClient: QueryClient,
	id: number
) => {
	await queryClient.prefetchQuery({
		queryKey: ["users", id, "todos"],
		queryFn: () => UsersService.getUserTodosById(id),
		staleTime: 60 * 1000,
	});
};

export default prefetchGetUserTodosById;
