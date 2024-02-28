import useGetUserTodosById from "@/hooks/queries/users/useGetUserTodosById";
import useId from "@/hooks/shared/useId";
import { useRouter } from "next/router";
import React from "react";

const UserTodos = () => {
	const id = useId();
	const { data, isLoading, isError } = useGetUserTodosById(id);

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
			<h2 className="text-4xl font-bold">TODOS:</h2>
			<br />
			<div>
				{data?.data.map((todo) => {
					return (
						<React.Fragment key={todo.id}>
							<div className=" min-w-full px-[1rem] py-[1rem] text-start">
								<input
									type="radio"
									checked={todo.completed}
									disabled
									id={todo.id.toString()}
								/>
								<label htmlFor={todo.id.toString()}> {todo.title}</label>
							</div>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default UserTodos;
