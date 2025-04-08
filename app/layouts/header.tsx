import Link from "next/link";
import Image from "next/image"
import Button from "../components/button"
import { useRouter, usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useResponsive } from "../hooks/useResponsive";
import { useEffect, useState } from "react";


type HeaderProps = {
  header_nav: boolean,
  set_header_nav: React.Dispatch<React.SetStateAction<boolean>>
}

const Header:React.FC<HeaderProps> = ({ header_nav, set_header_nav }) => { 
  const { is_mobile } = useResponsive();
  const router = useRouter();
  const [is_top, set_is_top] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (!is_mobile && header_nav) {
      set_header_nav(false);
    }

    const handle_scroll = () => {
      set_is_top(window.scrollY === 0);
    }

    if (window.scrollY === 0) {
      set_is_top(true);
    }

    window.addEventListener('scroll', handle_scroll);

    return () => {
      window.removeEventListener('scroll', handle_scroll);
    }
  }, [header_nav, is_mobile]);

  return (
    <header className={`fixed w-full max-w-[1440px] flex justify-between items-center z-10 px-4 lg:px-8 py-6 transition-all duration-300 ${is_top && !header_nav && path === '/' ? 'bg-transparent' : 'bg-[#1E1E1E]' }`}>
      <div onClick={() => {router.push('/'); set_header_nav(false)}} className="hover:cursor-pointer">
        {
          is_mobile ?  
            <Image src="/images/h&l-logo.png" width={140} height={140} alt="H&L Logo"/> 
            : 
            <Image src="/images/h&l-logo.png" width={260} height={260} alt="H&L Logo"/>
        }
      </div>
      {
        !is_mobile && 
        <div className="flex justify-around items-center w-full max-w-128">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          {is_mobile && <Link href="/contact">Contact</Link>}
        </div>
      }
      {
        is_mobile && 
        (header_nav ? <IoMdClose onClick={() => set_header_nav(false)} className="w-8 h-8"/> : <IoMdMenu onClick={() => set_header_nav(true)} className="w-8 h-8"/>)
      }
      {
        !is_mobile && 
        <Button onClick={() => router.push('contact')}>
            Contact
          </Button>
      }
    </header>
  );
}

export default Header;