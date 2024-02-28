import useGetUserAlbumsById from "@/hooks/queries/users/useGetUserAlbumsById";
import { useRouter } from "next/router";
import React from "react";
import SingleAlbumItem from "./SingleAlbumItem";
import useId from "@/hooks/shared/useId";

const UserAlbums = () => {
	const id = useId();
	const { data, isLoading, isError } = useGetUserAlbumsById(id);

	if (isLoading || isError) {
		return (
			<div className="min-w-[100vw] flex flex-col justify-center items-center">
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
	}

	return (
		<div className="min-w-[100vw] flex flex-col">
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

export default UserAlbums;
