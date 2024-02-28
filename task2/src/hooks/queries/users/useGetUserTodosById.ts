import { UsersService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetUserTodosById = (id: number) => {
	return useQuery({
		queryKey: ["users", id, "todos"],
		queryFn: () => UsersService.getUserTodosById(id),
	});
};

export default useGetUserTodosById;
