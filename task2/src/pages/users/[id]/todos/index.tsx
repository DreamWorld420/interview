import UserTodos from "@/components/Molecules/UserTodos";
import prefetchGetUserTodosById from "@/hooks/prefetchQueries/users/prefetchGetUserTodosById";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryClient = new QueryClient();

	const id = parseInt(ctx.params?.id as string);

	await prefetchGetUserTodosById(queryClient, id);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const OnlyTodosPage = () => {
	return <UserTodos />;
};

export default OnlyTodosPage;
