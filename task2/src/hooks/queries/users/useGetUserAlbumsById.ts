import { UsersService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetUserAlbumsById = (id: number) => {
	return useQuery({
		queryKey: ["users", id, "albums"],
		queryFn: () => UsersService.getUserAlbumsById(id),
	});
};

export default useGetUserAlbumsById;
