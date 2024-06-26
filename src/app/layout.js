import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <script
          src='https://code.jquery.com/jquery-3.6.0.min.js'
          integrity='sha384-KyZXEAg3QhqLMpG8r+8fhAXLR6q75PA5f/6b4gclw6r0PpuUhy4B5vP3wh5dRg8F'
          crossOrigin='anonymous'
          defer
        ></script>
      </body>
    </html>
  );
}
