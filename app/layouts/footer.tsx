
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import { useRouter } from "next/navigation";
import { useResponsive } from "../hooks/useResponsive";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const path = useRouter();
  const { is_mobile } = useResponsive();

  const handle_message_send = () => {
    path.push('/contact')
  }

  return (
    <footer className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 py-24 px-8">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label>Email</label>
          <input 
            style={{backgroundColor: "#282828", padding: '10px', maxWidth: '320px'}}
          />
        </div>
        <div className="flex flex-col">
          <label>Message</label>
          <input 
            style={{backgroundColor: "#282828", padding: '10px', width: '100%', height: '100px', maxWidth: '320px'}}
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={handle_message_send} pill>
            send
          </Button>
        </div>
        {is_mobile && 
        <div>
          <p>&copy; {new Date().getFullYear()} H&L Studios. All rights reserved.</p>
        </div>
      }
      </form>
      <div>
      <iframe 
        width={is_mobile ? 260 : 450}
        height="300"
        scrolling="no" 
        style={{border: 'none'}}
        src="https://maps.google.com/maps?width=450&amp;height=300&amp;hl=en&amp;q=%20Vancouver+(Vancouver)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;style=element:geometry%7Ccolor:0x212121%7Celement:labels.icon%7Cvisibility:off%7Celement:labels.text.fill%7Ccolor:0x757575%7Celement:labels.text.stroke%7Ccolor:0x212121%7Celement:water%7Ccolor:0x000000%7Celement:landscape%7Ccolor:0x2c2c2c">
        </iframe>
        </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <Image src="/images/h&l-logo.png" width={260} height={260} alt="H&L Logo"/>
        </div>
        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/hlstudiosmx">
            <FaFacebook  className="h-16 w-16" />
          </Link>
          <Link href="https://www.instagram.com/hlstudiosmx/">
            <FaInstagram className="h-16 w-16" />
          </Link>
        </div>
        {!is_mobile && 
          <div>
            <p>&copy; {new Date().getFullYear()} H&L Studios. All rights reserved.</p>
          </div>
        }
      </div>
    </footer>
  );
}

export default Footer;