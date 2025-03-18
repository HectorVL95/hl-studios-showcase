'use client'

import "./globals.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout
