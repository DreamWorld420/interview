import Link from "next/link";

const Homepage = () => {
	return (
		<ul className="px-[2rem] py-[2rem]">
			<li>
				1. click{" "}
				<Link href={"/posts"}>
					<span className="text-blue-500 hover:underline">here</span>
				</Link>{" "}
				to view all posts.
			</li>
			<li>
				2. click{" "}
				<Link href={"/users"}>
					<span className="text-blue-500 hover:underline">here</span>
				</Link>{" "}
				to view all users.
			</li>
			<li>
				2. click{" "}
				<Link href={"/albums"}>
					<span className="text-blue-500 hover:underline">here</span>
				</Link>{" "}
				to view all albums.
			</li>
		</ul>
	);
};

export default Homepage;
