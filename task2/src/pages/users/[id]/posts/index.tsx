import UserPosts from "@/components/Molecules/UserPosts";
import prefetchGetUserPostsById from "@/hooks/prefetchQueries/users/prefetchGetUserPostsById";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryClient = new QueryClient();

	const id = parseInt(ctx.params?.id as string);

	await prefetchGetUserPostsById(queryClient, id);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const OnlyPostsPage = () => {
	return <UserPosts />;
};

export default OnlyPostsPage;
