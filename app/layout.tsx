'use client'

import "./globals.css";
import { useState, useEffect } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import MobileNav from "./layouts/mobile-nav";
import { useResponsive } from "./hooks/useResponsive";
import { usePathname } from "next/navigation";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [header_nav, set_header_nav] = useState(false);
  const { is_mobile } = useResponsive();
  const path = usePathname();
  const [hide_footer, set_hide_footer] = useState(false);

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

  useEffect(() => {
    if (path === '/contact') {
      set_hide_footer(true)
    } else {
      set_hide_footer(false)
    }
  }, [path])
  

  return (
    <html lang="en">
      <body>
        <Header header_nav={header_nav} set_header_nav={set_header_nav}/>
        { is_mobile && header_nav && <MobileNav set_header_nav={set_header_nav}/>}
          {children}
        {!hide_footer && <Footer/>}
      </body>
    </html>
  );
}

export default RootLayout;
