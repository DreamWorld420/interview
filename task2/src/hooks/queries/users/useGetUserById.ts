import { UsersService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetUserById = (id: number) => {
	return useQuery({
		queryKey: ["users", id],
		queryFn: () => UsersService.getUserById(id),
	});
};

export default useGetUserById;
