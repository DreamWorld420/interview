import { PostsService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetPostCommentById = (id: number) => {
	return useQuery({
		queryKey: ["posts", id, "comments"],
		queryFn: () => PostsService.getPostCommentById(id),
	});
};

export default useGetPostCommentById;
