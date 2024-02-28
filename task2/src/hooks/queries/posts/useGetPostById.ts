import { PostsService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetPostById = (id: number) => {
	return useQuery({
		queryKey: ["posts", id],
		queryFn: () => PostsService.getPostById(id),
	});
};

export default useGetPostById;
