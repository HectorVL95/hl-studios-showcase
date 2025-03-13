'use client'

import Image from "next/image";
import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <div >
      <header className="flex justify-between items-center px-8 py-6">
      <div>
        <Image src="/images/h&l-logo.png" width={260} height={60} alt="H&L Logo"/>
      </div>
      <div className="flex justify-around items-center w-full">
        <Link href="#">Home</Link>
        <Link href='#'>Services</Link>
        <Link href='#'>Portfolio</Link>
      </div>
      <Button onClick={()=> {console.log('button clicked')}}>
        Contact
      </Button>
      </header>
    </div>
  );
}
