import { UsersService } from "@/services";
import { QueryClient } from "@tanstack/react-query";

const prefetchGetUserAlbumsById = async (
	queryClient: QueryClient,
	id: number
) => {
	await queryClient.prefetchQuery({
		queryKey: ["users", id, "albums"],
		queryFn: () => UsersService.getUserAlbumsById(id),
		staleTime: 60 * 1000,
	});
};

export default prefetchGetUserAlbumsById;
