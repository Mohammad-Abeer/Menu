import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Select Lounge",
  description: "Shisha - Menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
