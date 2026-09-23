import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./TrueFocus.css";

const TrueFocus = ({
	sentence = "True Focus",
	separator = " ",
	manualMode = false,
	blurAmount = 5,
	borderColor = "green",
	glowColor = "rgba(0, 255, 0, 0.6)",
	animationDuration = 0.5,
	pauseBetweenAnimations = 1,
	className = "",
}) => {
	const words = sentence.split(separator);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lastActiveIndex, setLastActiveIndex] = useState(null);
	const containerRef = useRef(null);
	const wordRefs = useRef([]);
	const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
	const [reduceMotion, setReduceMotion] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReduceMotion(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);

	useEffect(() => {
		if (manualMode || reduceMotion) return;
		const interval = setInterval(
			() => {
				setCurrentIndex((prev) => (prev + 1) % words.length);
			},
			(animationDuration + pauseBetweenAnimations) * 1000,
		);
		return () => clearInterval(interval);
	}, [manualMode, reduceMotion, animationDuration, pauseBetweenAnimations, words.length]);

	useEffect(() => {
		const container = containerRef.current;
		const active = wordRefs.current[currentIndex];
		if (!container || !active) return;

		const measure = () => {
			const parentRect = container.getBoundingClientRect();
			const activeRect = active.getBoundingClientRect();
			setFocusRect({
				x: activeRect.left - parentRect.left,
				y: activeRect.top - parentRect.top,
				width: activeRect.width,
				height: activeRect.height,
			});
		};

		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(container);
		ro.observe(active);
		window.addEventListener("resize", measure);
		return () => {
			ro.disconnect();
			window.removeEventListener("resize", measure);
		};
	}, [currentIndex, words.length]);

	const handleMouseEnter = (index) => {
		if (manualMode) {
			setLastActiveIndex(index);
			setCurrentIndex(index);
		}
	};

	const handleMouseLeave = () => {
		if (manualMode) {
			setCurrentIndex(lastActiveIndex);
		}
	};

	return (
		<span className={`focus-container${className ? ` ${className}` : ""}`} ref={containerRef}>
			{words.map((word, index) => {
				const isActive = index === currentIndex;
				return (
					<span
						key={`${word}-${index}`}
						ref={(el) => {
							wordRefs.current[index] = el;
						}}
						className={`focus-word${manualMode ? " manual" : ""}${isActive && !manualMode ? " active" : ""}`}
						style={{
							filter: reduceMotion ? "none" : isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
							"--border-color": borderColor,
							"--glow-color": glowColor,
							transition: `filter ${animationDuration}s ease`,
						}}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
					>
						{word}
					</span>
				);
			})}

			{!reduceMotion && (
				<motion.span
					className="focus-frame"
					animate={{
						x: focusRect.x,
						y: focusRect.y,
						width: focusRect.width,
						height: focusRect.height,
						opacity: currentIndex >= 0 ? 1 : 0,
					}}
					transition={{ duration: animationDuration }}
					style={{
						"--border-color": borderColor,
						"--glow-color": glowColor,
					}}
				>
					<span className="corner top-left"></span>
					<span className="corner top-right"></span>
					<span className="corner bottom-left"></span>
					<span className="corner bottom-right"></span>
				</motion.span>
			)}
		</span>
	);
};

export default TrueFocus;
