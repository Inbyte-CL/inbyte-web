import { useEffect, useState } from "react";
import WebThreads from "@/components/v4/WebThreads";

type Theme = "light" | "dark";

const MOBILE_MQ = "(max-width: 959px)";

const readTheme = (): Theme => {
	if (typeof document === "undefined") return "dark";
	return document.documentElement.classList.contains("v5-light") ? "light" : "dark";
};

const readMobile = (): boolean => {
	if (typeof window === "undefined") return false;
	return window.matchMedia(MOBILE_MQ).matches;
};

export default function V5HeroThreads({ compact = false }: { compact?: boolean }) {
	const [theme, setTheme] = useState<Theme>(readTheme);
	const [mobile, setMobile] = useState(readMobile);

	useEffect(() => {
		const sync = () => setTheme(readTheme());
		document.addEventListener("v5-theme-change", sync);
		return () => document.removeEventListener("v5-theme-change", sync);
	}, []);

	useEffect(() => {
		const mq = window.matchMedia(MOBILE_MQ);
		const sync = () => setMobile(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);

	const light = theme === "light";

	return (
		<WebThreads
			color1={light ? "#7dceb0" : "#05cd84"}
			color2={light ? "#00a165" : "#9ee0c8"}
			color3="#ffffff"
			backgroundColor={light ? "#f6f8f7" : "#050607"}
			lightMode={light}
			speed={0.14}
			threadCount={compact ? 5 : 6}
			frequency={compact ? (mobile ? 5.0 : 4.6) : mobile ? 5.6 : 5.0}
			spread={compact ? (mobile ? 0.15 : 0.1) : mobile ? 0.08 : 0.11}
			taper={compact ? 0.55 : mobile ? 0.72 : 0.85}
			position={compact ? 0.5 : mobile ? 0.45 : 0.35}
			fanMode="center"
			glow={light ? 0.018 : 0.02}
			falloff={light ? 0.65 : 0.6}
			thickness={compact ? 0.46 : 0.5}
			brightness={light ? (compact ? 1.05 : 1.15) : compact ? 0.62 : 0.75}
			opacity={1}
			mirror={true}
			shimmer={true}
			grain={!compact}
			grainIntensity={light ? 0.04 : 0.05}
			mouseInteraction={!mobile && !compact}
			mouseStrength={0.35}
		/>
	);
}
