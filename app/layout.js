import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily Tasks App",
  description: "For recording my work tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-fuchsia-500 flex flex-col mt-10 text-lg justify-center items-center`}>{children}</body>
    </html>
  );
}
