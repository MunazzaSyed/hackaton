import Image from "next/image";
import About from "@/components/About";
import Food from "@/components/Food";
import WhyChoose from "@/components/WhyChoose"
import Group from "@/components/Group";
import Menu from "@/components/Menu"
import Client from "@/components/Client";
import Test from "@/components/Test";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="bg-black">
      {/* <Navbar />
      

      <Footer/> */}
      <div className="container-left max-w-screen-2xl px-6 py-44 absolute top-0 left-4">
        <i className="font-extrabold  text-white ">the Art of speed quality</i>
        <i className="font-extrabold text-white">food quality</i>
      <br/>
        <br/>
        <i className="font-bold  text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</i>
        <br></br>
        <i className="font-bold  text-white">Quas voluptas culpa voluptates earum veniam odio consectetur minus praesentium</i>
        <br></br>
        <i className="font-bold  text-white"> molestiae sequi corrupti veritatis perspiciatis,</i>
        <br></br>
        <i className="font-bold  text-white">adipisci officia eligendi, voluptatibus repellendus itaque suscipit.</i>
</div>
      <div className="container-left flex justify-end rounded-lg">
        <Image src={"/Header hero.png"} alt={"home"} height={300} width={400}/>   
 </div>
      <About />
      <Food />
      <WhyChoose />
      <Group />
      <Menu />
      <Client />
      <Test />
      <Blog/>
    </main>
  );
}
