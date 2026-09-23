import SpecularButton from "./SpecularButton.jsx";

type Variant = "primary" | "outline";

const variants: Record<
	Variant,
	{
		tint: string;
		tintOpacity: number;
		textColor: string;
		lineColor: string;
		baseColor: string;
		intensity: number;
	}
> = {
	primary: {
		tint: "#05cd84",
		tintOpacity: 1,
		textColor: "#04140e",
		lineColor: "#ffffff",
		baseColor: "#0b3d28",
		intensity: 1.2,
	},
	outline: {
		tint: "#ffffff",
		tintOpacity: 0.04,
		textColor: "currentColor",
		lineColor: "#05cd84",
		baseColor: "#3dca8d",
		intensity: 1.05,
	},
};

type Props = {
	children: React.ReactNode;
	href?: string;
	type?: "button" | "submit";
	variant?: Variant;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
};

export default function V5Button({
	children,
	href,
	type = "button",
	variant = "primary",
	className = "",
	onClick,
}: Props) {
	return (
		<SpecularButton
			href={href}
			type={type}
			size="md"
			radius={999}
			blur={0}
			shineSize={14}
			shineFade={38}
			thickness={1.15}
			speed={0.28}
			followMouse
			proximity={240}
			autoAnimate
			onClick={onClick}
			className={`v5-specular v5-specular--${variant}${className ? ` ${className}` : ""}`}
			{...variants[variant]}
		>
			{children}
		</SpecularButton>
	);
}
