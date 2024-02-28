import UserAlbums from "@/components/Molecules/UserAlbums";
import prefetchGetUserAlbumsById from "@/hooks/prefetchQueries/users/prefetchGetUserAlbumsById";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryClient = new QueryClient();

	const id = parseInt(ctx.params?.id as string);

	await prefetchGetUserAlbumsById(queryClient, id);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const OnlyAlbumsPage = () => {
	return <UserAlbums />;
};

export default OnlyAlbumsPage;
