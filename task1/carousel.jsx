import React, { useState, useEffect } from "react";

const Carousel = (props) => {
	const { selectedProducts } = props;
	const [linkIndex, setLinkIndex] = useState(0);
	const [link, setLink] = useState("");
	const [isPaused, setIsPaused] = useState(false);

	const advanceCarousel = () => {
		const newIndex =
			linkIndex === selectedProducts.length - 1 ? 0 : linkIndex + 1;
		const newLink = selectedProducts[newIndex]?.other_settings?.video_url;
		setLinkIndex(newIndex);
		setLink(newLink);
	};

	const pauseCarousel = () => {
		setIsPaused(true);
	};

	const resumeCarousel = () => {
		setIsPaused(false);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isPaused) {
				advanceCarousel();
			}
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, [linkIndex, isPaused]);

	return (
		<div>
			<iframe src={link} title="Video" width="600" height="400" />
			<button onClick={pauseCarousel}>Pause</button>
			<button onClick={resumeCarousel}>Resume</button>
		</div>
	);
};

export default Carousel;
