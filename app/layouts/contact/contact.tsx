'use client'

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react"
import { MdEmail } from "react-icons/md";
import { useForm } from "@formspree/react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/button";
import SectionLayout from "../section-layout";
import { FaCircleCheck } from "react-icons/fa6";
import TitlenSubtitle from "@/app/components/title";
import message_sent_store from "@/app/store/message-sent-store";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const path = useRouter();
  const { message_sent } = message_sent_store();
  const [state, handle_submit] = useForm('mvgaqdbw');
  const [form, set_form] = useState({
   name: '',
   email:'',
   phone: '',
   location: '',
   message: ''
  });

  return (
    <SectionLayout>
      <TitlenSubtitle  title='Contact Us' subtitle='We are looking forward to hearing from you soon'/>
      <div className="py-12 lg:py-24">
        { 
          state.succeeded || message_sent ?
          <motion.div className="flex items-center justify-center" initial={{scale: 0}} animate={{scale: 1}}>
            <div className="flex flex-col justify-center items-center gap-8 max-w-[600px]">
              <FaCircleCheck  className="w-48 h-48 lg:w-64 lg:h-64"/>
              <div>
                <p className="text-center font-bold text-4xl lg:text-7xl">Your message has been sent</p>
              </div>
              <p className="text-center text-xl">We will get back to you in the next 24 to 48 business hours</p>
              <Button onClick={() => path.push('/')}>Back to Home Page</Button>
            </div>
          </motion.div>
          :     
          <div className="flex flex-col-reverse lg:flex-row gap-24 lg:gap-48 justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <Link href="mailto:hlstudiosca@outlook.com">
                  <MdEmail className="w-20 h-20" />
                </Link>
                <p className="text-2xl">hlstudiosca@outlook.com</p>
              </div>
              <div className="flex flex-col flex-sa lg:flex-row gap-4 items-center">
                <Link href="https://www.facebook.com/hlstudiosmx">
                  <FaFacebook className="w-20 h-20" />
                </Link>
                <p className="text-2xl">H&L Studios</p>
              </div>
              <div className="flex flex-col flex-sa lg:flex-row gap-4 items-center">
                <Link href="https://www.instagram.com/hlstudiosmx/">
                  <FaInstagram className="w-20 h-20" />
                </Link>
                <p className="text-2xl">@hlstudiosmx</p>
              </div>
              <div className="flex flex-col flex-sa lg:flex-row gap-4 items-center">
                <Link href="https://wa.me/16722001523">
                  <FaWhatsapp className="w-20 h-20" />
                </Link>
                <p className="text-2xl">(672) 200 1523</p>
              </div>
            </div>
            <div className="w-full">
              <form   
                method="POST" 
                onSubmit={handle_submit} className="flex flex-col gap-4">
                <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-[1px]">
                    <label>Name</label>
                    <input 
                      required 
                      onChange={(e) => set_form({...form, name: e.target.value})} 
                      value={form.name} 
                      type="name"
                      name="name"
                      style={{backgroundColor: "#282828", padding: '10px'}} />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                    <label>Email</label>
                    <input 
                      required 
                      onChange={(e) => set_form({...form, email: e.target.value})} 
                      value={form.email}
                      type="email"
                      name="email"
                      style={{backgroundColor: "#282828", padding: '10px'}} />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                  <label>Phone (optional)</label>
                    <input 
                      onChange={(e) => set_form({...form, phone: e.target.value})} 
                      value={form.phone}
                      type="number"
                      name="phone"
                      style={{backgroundColor: "#282828", padding: '10px'}} />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                    <label>Location (optional)</label>
                    <input 
                      onChange={(e) => set_form({...form, location: e.target.value})} 
                      value={form.location} 
                      type="location"
                      name="location"
                      style={{backgroundColor: "#282828", padding: '10px'}} />
                  </div>
                </div>
                <div>
                  <label>Message</label>
                  <textarea 
                    required 
                    onChange={(e) => set_form({...form, message: e.target.value})} 
                    value={form.message}
                    name="message"
                    style={{backgroundColor: "#282828", padding: '10px', width: '100%', height:'220px'}} />
                </div>
                <div className="flex justify-center">
                  <Button type_btn={'submit'} >Send Message</Button>
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