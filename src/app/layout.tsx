import { Inter } from 'next/font/google';
import { AppProvider } from '../context/AppContext';
import ThemeProvider from '../components/ThemeProvider';
import '../styles/globals.css';
import '../styles/animations.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Orkestra: End-to-End Test Automation Pipeline Orchestration Platform',
  description: 'End-to-End Test Automation Pipeline Orchestration Platform',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}