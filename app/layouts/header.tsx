import Link from "next/link";
import Image from "next/image"
import Button from "../components/button"
import { IoMdMenu } from "react-icons/io";
import { useResponsive } from "../hooks/useResponsive";

const Header = () => { 

  const { is_mobile } = useResponsive();

  return (
    <header className="flex justify-between items-center px-8 py-6">
    <div>
      {is_mobile ?  <Image src="/images/h&l-logo.png" width={140} height={140} alt="H&L Logo"/> : <Image src="/images/h&l-logo.png" width={260} height={260} alt="H&L Logo"/>}
    </div>
    {!is_mobile && 
    <div className="flex justify-around items-center w-full max-w-128">
      <Link href="#" className="hover:underline">Home</Link>
      <Link href="#">Services</Link>
      <Link href="#">Portfolio</Link>

    </div>}
    {is_mobile && <IoMdMenu className="w-8 h-8"/>}
    { !is_mobile && <Button onClick={()=> {console.log('button clicked')}}>
      Contact
    </Button>}
    </header>
  );
}

export default Header;