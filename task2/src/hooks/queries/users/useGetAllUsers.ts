import { UsersService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetAllUsers = () => {
	return useQuery({
		queryKey: ["users"],
		queryFn: UsersService.getAllUsers,
	});
};

export default useGetAllUsers;
