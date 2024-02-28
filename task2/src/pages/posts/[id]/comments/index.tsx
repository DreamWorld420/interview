import prefetchGetPostCommentById from "@/hooks/prefetchQueries/posts/prefetchGetPostCommentById";
import useGetPostCommentById from "@/hooks/queries/posts/useGetPostCommentById";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryClient = new QueryClient();

	const id = parseInt(ctx.params?.id as string);

	await prefetchGetPostCommentById(queryClient, id);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const OnlyCommentsPage = () => {
	const router = useRouter();
	const id = parseInt(router.query?.id as string);
	const { data, isLoading, isError } = useGetPostCommentById(id);

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
			<div className="flex flex-col space-y-[1rem]">
				{data?.data.map((comment) => {
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
				})}{" "}
			</div>
		</div>
	);
};

export default OnlyCommentsPage;
