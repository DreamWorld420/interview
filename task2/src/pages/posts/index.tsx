import { GetServerSideProps } from "next";
import prefetchGetAllPosts from "@/hooks/prefetchQueries/posts/prefetchGetAllPosts";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import useGetAllPosts from "@/hooks/queries/posts/useGetAllPosts";
import React from "react";
import { useRouter } from "next/router";
import SinglePostItem from "@/components/Molecules/SinglePostItem";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryClient = new QueryClient();

	await prefetchGetAllPosts(queryClient);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const AllPostsPage = () => {
	const { data, isLoading, isError } = useGetAllPosts();
	const router = useRouter();

	if (isLoading || isError)
		return (
			<div className="min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center">
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

	return (
		<div className="min-w-[100vw] min-h-[100vh] px-[2rem] py-[2rem]">
			<h1 className="text-4xl mb-[2rem] font-bold">Posts</h1>
			<div className="flex flex-col">
				{data?.data.map((post) => {
					return (
						<React.Fragment key={post.id}>
							<SinglePostItem
								title={post.title}
								body={post.body}
								postId={post.id}
							/>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default AllPostsPage;
