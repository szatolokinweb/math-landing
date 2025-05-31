import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <div className="bg-gray-100 py-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
