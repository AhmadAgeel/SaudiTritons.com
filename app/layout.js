export const metadata = {
  title: "SaudiTritons.com Redirect",
  description: "Permanent redirect to SaudiTritons.org",
  robots: {
    index: false,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
