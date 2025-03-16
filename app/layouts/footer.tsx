
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  //Continue on it
  
  return (
    <footer className="flex gap-8 py-24">
      <form className="flex flex-col gap-8">
        <input 
          placeholder="Email"
          style={{backgroundColor: "#282828", padding: '10px', width: '100%', maxWidth: '320px'}}
        />
        <input 
          placeholder="Message"
          style={{backgroundColor: "#282828", padding: '10px', width: '100%', maxWidth: '320px'}}
        />
      </form>
      <div>
        
      </div>
      <div>



      </div>
    </footer>
  );
}

export default Footer;