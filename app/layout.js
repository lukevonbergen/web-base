import './globals.css';

export const metadata = {
  title: 'Your App',
  description: 'Your site description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}