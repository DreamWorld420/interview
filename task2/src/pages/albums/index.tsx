import SingleAlbumItem from "@/components/Molecules/SingleAlbumItem";
import prefetchGetAllAlbums from "@/hooks/prefetchQueries/albums/prefetchGetAllAlbums";
import useGetAllAlbums from "@/hooks/queries/albums/useGetAllAlbums";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient();

	await prefetchGetAllAlbums(queryClient);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const AllAlbumsPage = () => {
	const { data, isLoading, isError } = useGetAllAlbums();

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
		<div className="min-w-[100vw] min-h-[100vh] px-[2rem] py-[2rem] flex flex-col">
			<h2 className="text-4xl font-bold">Albums:</h2>
			<br />
			<div>
				{data?.data.map((album) => {
					return (
						<React.Fragment key={album.id}>
							<SingleAlbumItem title={album.title} albumId={album.id} />
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default AllAlbumsPage;
