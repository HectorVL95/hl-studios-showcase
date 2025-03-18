import Link from "next/link";
import Image from "next/image"
import Button from "../components/button"
import { IoMdMenu } from "react-icons/io";
import { useResponsive } from "../hooks/useResponsive";
import { useRouter } from "next/navigation";

const Header = () => { 

  const { is_mobile } = useResponsive();
  const router = useRouter();


  return (
    <header className="flex justify-between items-center lg:px-8 py-6">
    <div onClick={() => router.push('/')} className="hover:cursor-pointer">
      {is_mobile ?  <Image src="/images/h&l-logo.png" width={140} height={140} alt="H&L Logo"/> : <Image src="/images/h&l-logo.png" width={260} height={260} alt="H&L Logo"/>}
    </div>
    {!is_mobile && 
    <div className="flex justify-around items-center w-full max-w-128">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/services" className="hover:underline">Services</Link>
      <Link href="#" className="hover:underline">Portfolio</Link>
      {is_mobile && <Link href="/contact">Contact</Link>}
    </div>}
    {is_mobile && <IoMdMenu className="w-8 h-8"/>}
    { !is_mobile && <Button onClick={() => router.push('contact')}>
      Contact
    </Button>}
    </header>
  );
}

export default Header;