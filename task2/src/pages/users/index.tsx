import prefetchGetAllUsers from "@/hooks/prefetchQueries/users/prefetchGetAllUsers";
import useGetAllUsers from "@/hooks/queries/users/useGetAllUsers";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const getServerSideProps = async () => {
	const queryClient = new QueryClient();

	await prefetchGetAllUsers(queryClient);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const AllUsersPage = () => {
	const { data, isLoading, isError } = useGetAllUsers();
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
			<h1 className="text-4xl mb-[2rem] font-bold">Users</h1>
			<div className="flex flex-col">
				{data?.data.map((user) => {
					return (
						<React.Fragment key={user.id}>
							<Link
								href={`/users/${user.id}`}
								className="border-b border-gray-600 min-w-full px-[1rem] py-[1rem] text-start hover:bg-gray-200"
							>
								<h2 className="mb-[0.5rem] font-semibold">{user.username}</h2>
								<p>{user.email}</p>
							</Link>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default AllUsersPage;
