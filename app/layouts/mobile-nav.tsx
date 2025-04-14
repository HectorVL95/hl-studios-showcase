import {motion} from "motion/react"
import { useRouter } from "next/navigation";

type NavProps = {
  set_header_nav:React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav: React.FC<NavProps> = ({ set_header_nav }) => {
  const router = useRouter();

  const handle_contact_btn = (link: string) => {
    router.push(link);
    set_header_nav(false);
  }

  return (
    <motion.nav className="bg-[#1E1E1E] w-full fixed flex justify-center h-[100vh] z-9">
      <div className="flex flex-col items-center mt-48 gap-8 ">
        <button  onClick={() => handle_contact_btn('/')}>Home</button>
        <button  onClick={() => handle_contact_btn('services')}>Services</button>
        <button  onClick={() => handle_contact_btn('portfolio')}>Portfolio</button>
        <button  onClick={() => handle_contact_btn('contact')}>Contact</button>
      </div>
    </motion.nav>
  );
}

export default MobileNav;