import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";

const bodyFont = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-body",
	weight: ["400", "500", "600", "700"],
});

const displayFont = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-display",
	weight: ["500", "600", "700"],
});

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
			<body className={`${bodyFont.variable} ${displayFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
