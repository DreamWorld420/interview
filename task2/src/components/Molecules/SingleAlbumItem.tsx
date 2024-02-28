import Link from "next/link";

const SingleAlbumItem: React.FC<{
	title: string;
	albumId: number;
}> = (props) => {
	const { title, albumId } = props;
	return (
		<div className="border-b border-gray-600 min-w-full px-[1rem] py-[1rem] text-start hover:bg-gray-200">
			<Link
				href={`/albums/${albumId}/photos`}
				style={{
					minHeight: "100%",
				}}
			>
				<h2 className="mb-[0.5rem] font-semibold">{title}</h2>
			</Link>
		</div>
	);
};

export default SingleAlbumItem;
