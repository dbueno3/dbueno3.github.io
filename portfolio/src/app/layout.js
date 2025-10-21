import "./globals.css";

export const metadata = {
  title: "Portfolio | Under Construction",
  description: "Personal portfolio site currently under construction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
