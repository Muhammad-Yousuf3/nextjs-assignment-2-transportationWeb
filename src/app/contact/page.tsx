import Image from "next/image";

function ContactPage(){
    return(
        <main>

         {/* Contact Section */}
  <section className="ml-36 mt-[100px]">
    <h2 className="font-bold text-4xl">CONTACT US</h2>
  </section>

  <section className="flex gap-10">

  <section className="grid grid-rows-4 ml-36 mt-5">
    <input type="text" placeholder="Your Name" className="w-[400px] h-12 border-[1px] shadow-sm shadow-gray-600 p-2 placeholder:text-black"/>
    <input type="number" placeholder="Phone Number" className="w-[400px] -mt-5 h-12 border-[1px] shadow-sm shadow-gray-600 p-2 placeholder:text-black"/>
    <input type="email" placeholder="Email" className="w-[400px] -mt-7 h-12 border-[1px] shadow-sm shadow-gray-600 p-2 placeholder:text-black" />
    <input type="text" placeholder="Message" className="w-[400px] -mt-7 h-[120px] border-[1px] shadow-sm shadow-gray-600 p-2 placeholder:text-black"/>
    <button className="bg-cyan-500 w-[150px] h-12 mt-5 rounded-md text-center text-white hover:bg-blue-950">SEND</button>
  </section>

  <section>
    <Image src={"/map.png"} alt="Google Map" width={"700"} height={"0"}></Image>
  </section>

</section>
        </main>
    )
}
export default ContactPage