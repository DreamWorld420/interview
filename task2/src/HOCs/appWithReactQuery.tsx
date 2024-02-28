import React, { useState } from "react";

import { type AppProps } from "next/app";

import {
	DehydratedState,
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function appWithReactQuery(Component: React.FC<AppProps>): React.FC<AppProps> {
	const ReactQueryWrappedComponent = (props: AppProps) => {
		const [queryClient] = useState(
			() =>
				new QueryClient({
					defaultOptions: {
						queries: {
							refetchOnWindowFocus: false,
							// refetchOnMount: false,
							refetchOnReconnect: false,
							retry: 1,
							staleTime: 1000 * 60,
						},
					},
				})
		);

		return (
			<QueryClientProvider client={queryClient}>
				<HydrationBoundary state={props.pageProps.dehydratedState}>
					<Component {...props} />
					<ReactQueryDevtools />
				</HydrationBoundary>
			</QueryClientProvider>
		);
	};

	return ReactQueryWrappedComponent;
}

export default appWithReactQuery;
