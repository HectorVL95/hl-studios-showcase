import SectionLayout from "../section-layout";
import { FaMessage, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import TitlenSubtitle from "@/app/components/title";

const Contact = () => {
  return (
    <SectionLayout>
      <TitlenSubtitle  title='Contact Us' subtitle='We are looking forward to hearing from you soon'/>
      <SectionLayout>
        <div className="flex gap-8 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <FaMessage className="w-8 h-8" />
              <p>contact@hlstudios.io</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaFacebook className="w-8 h-8" />
              <p>H&L Studios</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaInstagram className="w-8 h-8" />
              <p>H&L Studios</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaWhatsapp className="w-8 h-8" />
              <p>(672) 123  1234</p>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-4">
              <div className="grid grid-rows-2 grid-cols-2 gap-4">
                <div className="flex flex-col gap-[1px]">
                  <label>Name</label>
                  <input style={{backgroundColor: "#282828", padding: '10px', maxWidth: '400px'}} />
                </div>
                <div className="flex flex-col gap-[1px]">
                  <label>Email</label>
                  <input style={{backgroundColor: "#282828", padding: '10px', maxWidth: '400px'}} />
                </div>
                <div className="flex flex-col gap-[1px]">
                <label>Phone</label>
                  <input style={{backgroundColor: "#282828", padding: '10px', maxWidth: '400px'}} />
                </div>
                <div className="flex flex-col gap-[1px]">
                  <label>Location</label>
                  <input style={{backgroundColor: "#282828", padding: '10px', maxWidth: '400px'}} />
                </div>
              </div>
              <div>
                <label>Message</label>
                <input style={{backgroundColor: "#282828", padding: '10px', width: '100%', height:'220px'}} />
              </div>
            </form>
          </div>
        </div>
      </SectionLayout>

    </SectionLayout>
  );
}

export default Contact;