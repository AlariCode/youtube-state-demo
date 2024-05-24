import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
	variable: "--fira-font",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<head>
				<meta property="og:locale" content="ru_RU" />
			</head>
			<body className={firaSans.variable}>{children}</body>
		</html>
	);
}
