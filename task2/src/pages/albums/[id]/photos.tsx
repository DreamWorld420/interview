import prefetchGetAlbumPhotosById from "@/hooks/prefetchQueries/albums/prefetchGetAlbumPhotosById";
import useGetAlbumPhotosById from "@/hooks/queries/albums/useGetAlbumPhotosById";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const queryClient = new QueryClient();
	const id = parseInt(ctx.params?.id as string);

	await prefetchGetAlbumPhotosById(queryClient, id);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const SingleAlbumViewPage = () => {
	const router = useRouter();
	const id = parseInt(router.query?.id as string);
	const { data, isLoading, isError } = useGetAlbumPhotosById(id);

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
		<div className="min-w-[100vw] min-h-[100vh] flex flex-col items-center justify-center space-y-[1rem]">
			{data?.data.map((photo) => {
				return (
					<React.Fragment key={photo.id}>
						<div className="h-[600px] w-[600px] relative">
							<Image
								src={photo.url}
								alt={photo.title}
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default SingleAlbumViewPage;
