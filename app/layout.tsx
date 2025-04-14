'use client'

import "./globals.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { useState, useEffect } from "react";
import MobileNav from "./layouts/mobile-nav";
import { usePathname } from "next/navigation";
import { useResponsive } from "./hooks/useResponsive";
import message_sent_store from "./store/message-sent-store";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const path = usePathname();
  const { is_mobile } = useResponsive();
  const { reset_message_sent } = message_sent_store();
  const [header_nav, set_header_nav] = useState(false);
  const [hide_footer, set_hide_footer] = useState(false);

  useEffect(() => {
    if (!is_mobile) {
      set_header_nav(false);
    }
  }, [is_mobile]);

  useEffect(() => {
    if (header_nav) {
      document.body.style.overflow = 'hidden'
    }
    if (!header_nav) {
      document.body.style.overflow = 'visible'
    }
  }, []);

  useEffect(() => {
    if (path === '/contact') {
      set_hide_footer(true);
    } else {
      set_hide_footer(false);
      reset_message_sent();
    }
  }, [path]);
  

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
