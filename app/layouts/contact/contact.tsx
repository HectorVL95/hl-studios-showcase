 'use client'

 import SectionLayout from "../section-layout";
import { FaMessage, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import TitlenSubtitle from "@/app/components/title";
import Button from "@/app/components/button";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"

const Contact = () => {

  //Pending working on it
  
  const [acknoledgement_message, set_acknoledgement_message] = useState(false);

  const path = useRouter()

  const [form, set_form] = useState({
   name: '',
   email:'',
   phone: '',
   location: '',
   message: ''
  });

  const handle_click = () => {
    if(form.name === '' || form.email === '' ||  form.message === '' ) {
      return;
    }
    set_acknoledgement_message(true)
  }

  return (
    <SectionLayout>
      <TitlenSubtitle  title='Contact Us' subtitle='We are looking forward to hearing from you soon'/>
      <div className="py-24">
        { 
          acknoledgement_message ? 
          <motion.div className="flex items-center justify-center" initial={{scale: 0}} animate={{scale: 1}}>
            <div className="flex flex-col justify-center items-center gap-8 max-w-[600px]">
              <FaCircleCheck  className="w-76 h-76"/>
              <div>
                <p className="text-center font-bold text-7xl">Your message has been sent</p>
              </div>
              <p className="text-center text-2xl">We will get back to you in the next 24 to 48 business hours</p>
              <Button onClick={() => path.push('/')}>Back to Home Page</Button>
            </div>
          </motion.div>
          :     
          <div className="flex flex-col-reverse lg:flex-row gap-24 lg:gap-48 justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <FaMessage className="w-20 h-20" />
                <p className="text-2xl">contact@hlstudios.io</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaFacebook className="w-20 h-20" />
                <p className="text-2xl">H&L Studios</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaInstagram className="w-20 h-20" />
                <p className="text-2xl">H&L Studios</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaWhatsapp className="w-20 h-20" />
                <p className="text-2xl">(672) 123  1234</p>
              </div>
            </div>
            <div className="w-full">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-[1px]">
                    <label>Name</label>
                    <input 
                      required 
                      onChange={(e) => set_form({...form, name: e.target.value})} 
                      value={form.name} 
                      style={{backgroundColor: "#282828", padding: '10px'}} />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                    <label>Email</label>
                    <input 
                      required 
                      onChange={(e) => set_form({...form, email: e.target.value})} 
                      value={form.email} 
                      style={{backgroundColor: "#282828", padding: '10px'}} />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                  <label>Phone (optional)</label>
                    <input 
                      onChange={(e) => set_form({...form, phone: e.target.value})} 
                      value={form.phone} 
                      style={{backgroundColor: "#282828", padding: '10px'}} />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                    <label>Location (optional)</label>
                    <input 
                      onChange={(e) => set_form({...form, location: e.target.value})} 
                      value={form.location} 
                      style={{backgroundColor: "#282828", padding: '10px'}} />
                  </div>
                </div>
                <div>
                  <label>Message</label>
                  <textarea 
                    required 
                    onChange={(e) => set_form({...form, message: e.target.value})} 
                    value={form.message} 
                    style={{backgroundColor: "#282828", padding: '10px', width: '100%', height:'220px'}} />
                </div>
                <div className="flex justify-center">
                  <Button onClick={handle_click}>Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        }
      </div>
    </SectionLayout>
  );
}

export default Contact;