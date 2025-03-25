
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center gap-8 py-24 px-8">
      <form className="flex flex-col gap-8">
        <input 
          placeholder="Email"
          style={{backgroundColor: "#282828", padding: '10px', width: '80%', maxWidth: '320px'}}
        />
        <input 
          placeholder="Message"
          style={{backgroundColor: "#282828", padding: '10px', width: '100%', height: '100px', maxWidth: '320px'}}
        />
        <div className="flex justify-end">
          <Button pill>
            send
          </Button>
        </div>
      </form>
      <div>
      <iframe 
        width="450" 
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
          <FaFacebook className="h-8 w-8" />
          <FaInstagram className="h-8 w-8" />
          <FaLinkedin className="h-8 w-8" />
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} H&L Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;