import Hero from '@/components/Hero';
import Myskills from "@/components/Myskills";
import Myeducation from "@/components/Myeducation";
import Image from "next/image";
import Link from "next/link";
import Myabout from "@/components/Myabout";
import Myproject from "@/components/Myproject";
import Mycontact from "@/components/Mycontact";
import "../app/styles/home.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="main-container">
        {/* Profile Image */}
        <Image
          src="/image.jpeg"
          width={300}
          height={300}
          alt="profile pic"
          className="mypic"
        />

        {/* Text Section */}
        <div className="my-text">
          <h1 className="hi-text">
            <b>Hi There</b>
          </h1>
          <h4>
            <b>I’m Mahad Khan</b>
          </h4>
          <h1 className="Frontend-text">
            <b>Frontend Developer</b>
          </h1>
        </div>
      </div>

      <div className='button-container'>
      <Link href="/contact">
        <button>
          <b>Contact Me</b>
        </button>
        
      </Link>
      </div>

      
      <Myabout />
        <Myskills />
      <Myeducation />
      <Myproject />
      <Mycontact />
    </div>
  );
}
