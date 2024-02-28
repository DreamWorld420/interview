import UserAlbums from "@/components/Molecules/UserAlbums";
import UserInfo from "@/components/Molecules/UserInfo";
import UserPosts from "@/components/Molecules/UserPosts";
import UserTodos from "@/components/Molecules/UserTodos";
import prefetchGetUserAlbumsById from "@/hooks/prefetchQueries/users/prefetchGetUserAlbumsById";
import prefetchGetUserById from "@/hooks/prefetchQueries/users/prefetchGetUserById";
import prefetchGetUserPostsById from "@/hooks/prefetchQueries/users/prefetchGetUserPostsById";
import prefetchGetUserTodosById from "@/hooks/prefetchQueries/users/prefetchGetUserTodosById";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryClient = new QueryClient();

	const id = parseInt(ctx.params?.id as string);

	await prefetchGetUserById(queryClient, id);
	await prefetchGetUserTodosById(queryClient, id);
	await prefetchGetUserAlbumsById(queryClient, id);
	await prefetchGetUserPostsById(queryClient, id);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const SingleUserPage = () => {
	return (
		<div className="min-w-[100vw] min-h-[100vh] px-[2rem] py-[2rem] flex flex-col">
			<UserInfo />
			<br />
			<UserPosts />
			<br />
			<UserAlbums />
			<br />
			<UserTodos />
		</div>
	);
};

export default SingleUserPage;
