/**
 * OpenServ-style full-segment scroll for /v3:
 * - Viewport sections snap one-by-one
 * - Active segment animates as a complete panel
 */
export function initV3Motion() {
	const segments = [...document.querySelectorAll<HTMLElement>("[data-v3-segment]")];
	if (!segments.length) return;

	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (reduced) {
		segments.forEach((el) => el.classList.add("is-active"));
		return;
	}

	const activate = (el: HTMLElement) => {
		if (el.classList.contains("is-active")) return;
		el.classList.add("is-active");
	};

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				activate(entry.target as HTMLElement);
			});
		},
		{
			threshold: 0.45,
			rootMargin: "0px 0px -10% 0px",
		},
	);

	segments.forEach((el) => {
		io.observe(el);
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight * 0.55 && rect.bottom > window.innerHeight * 0.35) {
			activate(el);
		}
	});

	// Keep first segment active on load
	activate(segments[0]);
}
