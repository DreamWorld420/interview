import { UsersService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetUserById = async (queryClient: QueryClient, id: number) => {
	await queryClient.prefetchQuery({
		queryKey: ["users", id],
		queryFn: () => UsersService.getUserById(id),
		staleTime: 60 * 1000,
	});
};

export default prefetchGetUserById;
