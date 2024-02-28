import { useRouter } from "next/router";

const useId = () => {
	const router = useRouter();
	const id = parseInt(router.query?.id as string);
	return id;
};

export default useId;
