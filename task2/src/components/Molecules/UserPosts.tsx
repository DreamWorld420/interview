import useGetUserPostsById from "@/hooks/queries/users/useGetUserPostsById";
import { useRouter } from "next/router";
import React from "react";
import SinglePostItem from "./SinglePostItem";
import useId from "@/hooks/shared/useId";

const UserPosts = () => {
	const id = useId();
	const { data, isLoading, isError } = useGetUserPostsById(id);

	if (isLoading || isError) {
		return (
			<div className="min-w-[100vw] flex flex-col justify-center items-center">
				<p
					className="text-xl"
					style={{
						color: isError ? "red" : undefined,
					}}
				>
					{isError ? "Error while fetching!" : "Loading..."}
				</p>
			</div>
		);
	}

	return (
		<div className="min-w-[100vw] flex flex-col">
			<h2 className="text-4xl font-bold">Posts:</h2>
			<br />
			<div>
				{data?.data.map((post) => {
					return (
						<React.Fragment key={post.id}>
							<SinglePostItem
								body={post.body}
								title={post.title}
								postId={post.id}
							/>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default UserPosts;
