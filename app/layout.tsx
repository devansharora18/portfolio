import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Devansh Arora",
	description: "Devansh Arora's CV",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
