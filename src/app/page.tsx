import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
      <h1>Navbar</h1>
      <ul>
     <li><Link href="about">About</Link></li>
      <li><Link href="contact">Contact</Link></li>
      <li> <Link href="service">Service</Link></li>
      </ul>
    </div>
    
  );
}
