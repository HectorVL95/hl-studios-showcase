import Link from "next/link";
import Button from "../components/button";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-center h-[100vh]">
      <div className="flex flex-col items-center gap-8 align-self">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="#" className="hover:underline">Portfolio</Link>
        <Button onClick={() => router.push('contact')}>
          Contact
        </Button>
      </div>
    </nav>
  );
}

export default MobileNav;