import Link from "next/link";

const SinglePostItem: React.FC<{
	title: string;
	body: string;
	postId: number;
}> = (props) => {
	const { body, title, postId } = props;
	return (
		<div className="border-b border-gray-600 min-w-full px-[1rem] py-[1rem] text-start hover:bg-gray-200">
			<Link
				href={`/posts/${postId}`}
				style={{
					minHeight: "100%",
				}}
			>
				<h2 className="mb-[0.5rem] font-semibold">{title}</h2>
				<p>{body}</p>
			</Link>
		</div>
	);
};

export default SinglePostItem;
