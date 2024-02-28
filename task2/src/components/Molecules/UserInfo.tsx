import useGetUserById from "@/hooks/queries/users/useGetUserById";
import useId from "@/hooks/shared/useId";
import { useRouter } from "next/router";

const UserInfo = () => {
	const id = useId();
	const { data, isLoading, isError } = useGetUserById(id);

	if (isLoading || isError)
		return (
			<div className=" min-w-[100vw] min-h-[8rem] flex flex-col justify-center items-center">
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
		<div className="flex flex-col min-h-[8rem] min-w-[100vw]">
			<h2 className="text-4xl font-bold">User Info:</h2>
			<br />
			<p>name: {data?.data.name}</p>
			<p>username: {data?.data.username}</p>
			<p>email: {data?.data.email}</p>
			<p>phone: {data?.data.phone} </p>
			<p>website: {data?.data.website}</p>
		</div>
	);
};

export default UserInfo;
