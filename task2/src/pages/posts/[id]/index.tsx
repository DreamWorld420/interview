import prefetchGetPostById from "@/hooks/prefetchQueries/posts/prefetchGetPostById";
import prefetchGetPostCommentById from "@/hooks/prefetchQueries/posts/prefetchGetPostCommentById";
import useGetPostById from "@/hooks/queries/posts/useGetPostById";
import useGetPostCommentById from "@/hooks/queries/posts/useGetPostCommentById";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryClient = new QueryClient();

	const id = parseInt(ctx.params?.id as string);

	await prefetchGetPostById(queryClient, id);
	await prefetchGetPostCommentById(queryClient, id);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const SinglePostPage = () => {
	const router = useRouter();
	const id = parseInt(router.query?.id as string);
	const {
		data: postData,
		isLoading: postIsLoading,
		isError: postIsError,
	} = useGetPostById(id);
	const {
		data: commentData,
		isLoading: commentIsLoading,
		isError: commentIsError,
	} = useGetPostCommentById(id);

	if (postIsLoading || postIsError || commentIsLoading || commentIsError)
		return (
			<div className="min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center">
				<p
					className="text-xl"
					style={{
						color: postIsError || commentIsError ? "red" : undefined,
					}}
				>
					{postIsError || commentIsError
						? "Error while fetching!"
						: "Loading..."}
				</p>
			</div>
		);

	return (
		<div className="min-w-[100vw] min-h-[100vh] px-[2rem] py-[2rem]">
			<div className="flex flex-col space-y-[1rem]">
				<div className=" min-w-full px-[1rem] pb-[1rem]">
					<h1 className="mb-[2rem] font-bold text-4xl">
						{postData?.data.title}
					</h1>
					<p>{postData?.data.body}</p>
					<br />
					<h2 className="font-semibold text-2xl">Comments</h2>
					<br />
					{commentData?.data.map((comment) => {
						return (
							<React.Fragment key={comment.id}>
								<div>
									<div className="flex space-x-4">
										<p className="text-sm font-semibold">{comment.name}</p>
										<p className="opacity-50 text-sm">{comment.email}</p>
									</div>
									<p>{comment.body}</p>
								</div>
								<br />
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SinglePostPage;
