import { UsersService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetAllUsers = async (queryClient: QueryClient) => {
	await queryClient.prefetchQuery({
		queryKey: ["users"],
		queryFn: UsersService.getAllUsers,
		staleTime: 60 * 1000,
	});
};

export default prefetchGetAllUsers;
