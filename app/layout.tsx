import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'admin panel',
	description: 'jda-admin-panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html data-theme='dark' lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
