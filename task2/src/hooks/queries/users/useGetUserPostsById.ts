import { UsersService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetUserPostsById = (id: number) => {
	return useQuery({
		queryKey: ["users", id, "posts"],
		queryFn: () => UsersService.getUserPostsById(id),
	});
};

export default useGetUserPostsById;
