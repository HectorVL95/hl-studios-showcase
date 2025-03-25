'use client'

import "./globals.css";
import { useState, useEffect } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import MobileNav from "./layouts/mobile-nav";
import { useResponsive } from "./hooks/useResponsive";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [header_nav, set_header_nav] = useState(false);
  const { is_mobile } = useResponsive();

  useEffect(() => {
    if (!is_mobile) {
      set_header_nav(false)
    }
  }, [is_mobile])

  useEffect(() => {
    if (header_nav) {
      document.body.style.overflow = 'hidden'
    }
    if (!header_nav) {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <html lang="en">
      <body>
        <Header header_nav={header_nav} set_header_nav={set_header_nav}/>
        { is_mobile && header_nav && <MobileNav set_header_nav={set_header_nav}/>}
          {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
