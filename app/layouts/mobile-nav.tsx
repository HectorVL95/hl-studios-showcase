import Link from "next/link";
import Button from "../components/button";
import { useRouter } from "next/navigation";

type NavProps = {
  set_header_nav:React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav: React.FC<NavProps> = ({ set_header_nav }) => {
  const router = useRouter();

  const handle_contact_btn = () => {
    router.push('contact')
    set_header_nav(false)
  }

  return (
    <nav className="bg-[#1E1E1E] w-full fixed flex justify-center h-[100vh] z-9">
      <div className="flex flex-col items-center mt-48 gap-8 ">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="#" className="hover:underline">Portfolio</Link>
        <Button onClick={handle_contact_btn}>
          Contact
        </Button>
      </div>
    </nav>
  );
}

export default MobileNav;