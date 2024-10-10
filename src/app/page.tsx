import Image from "next/image"

function Mainpage(){
  return(
    <main>
      <section className="relative">
        {/* Header Image */}
      <Image src={"/slider-bg.jpg"} alt={"Truck Image"} width={"500"} height={"0"} className="h-[500px] w-full  object-cover"></Image>

      <section className="absolute inset-0 bg-gray-700 opacity-80 "></section>

        {/* Text */}
      <section className="absolute inset-0 w-[50%] mt-24 ml-28">
        <h1 className="text-white text-5xl font-bold">WE PROVIDE BEST TRANSPORT SERVICE.</h1>
        <p className="text-white text-sm text-justify pt-5"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci,
        blanditiis quidem dolorum odit voluptas? Voluptate, eveniet</p>
        
        {/* Button */}
        <button className="w-32 h-10 bg-cyan-500 text-center text-white mt-8 hover:bg-blue-950">Get A Quote</button>
        </section>      
  
      </section>


    {/* Service Section */}
  <section className="flex ml-24 mt-[100px]">
    {/* Service Header */}
    <h2 className="text-4xl font-bold">Our </h2> <h2 className="text-4xl font-bold text-cyan-500 px-2">Services</h2>
  </section>
    <p className="text-gray-900 ml-24 pt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
    

{/* MAIN SERVICE SECTION */}
    <section className="grid grid-cols-2 gap-5 ml-24 mt-5">

      {/* Section Aeroplane */}
  <section className="bg-gray-200 w-[500px] rounded-xl h-44 ">
   {/* Aeroplane Image and Header */}
  <section className="flex pt-5 pl-5">
      <Image src={"/s1.png"} alt={"Aeroplane"} width={80} height={0}></Image>
      <h2 className="font-bold text-2xl pl-5">AIR TRANSPORT</h2>
    </section>
    {/* Aeroplane Text */}
    <section className="w-[350px] ml-[119px] -mt-9 text-justify">
<p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
    </section>
    <button className="bg-transparent font-bold hover:text-cyan-500 pl-[120px] pt-5">Read More</button>
  </section>


  <section className="bg-gray-200 w-[500px] rounded-xl h-44">
   {/* Ship Image and Header */}
  <section className="flex pt-5 pl-3">
      <Image src={"/s2.png"} alt={"Ship"} width={80} height={0}></Image>
      <h2 className="font-bold text-2xl pl-3">CARGO TRANSPORT</h2>
    </section>
    {/* Ship Text */}
    <section className="w-[350px] ml-[105px]  text-justify">
<p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
    </section>
    <button className="bg-transparent font-bold hover:text-cyan-500 pl-[105px] pt-5">Read More</button>
  </section>  

  <section className="bg-gray-200 w-[500px] rounded-xl h-44">
   {/* Truck Image and Header */}
  <section className="flex pt-5 pl-3">
      <Image src={"/s3.png"} alt={"Truck"} width={80} height={0}></Image>
      <h2 className="font-bold text-2xl pl-3">TRUCK TRANSPORT</h2>
    </section>
    {/* Truck Text */}
    <section className="w-[350px] ml-[105px]  text-justify">
<p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
    </section>
    <button className="bg-transparent font-bold hover:text-cyan-500 pl-[105px] pt-5">Read More</button>
  </section>  


  <section className="bg-gray-200 w-[500px] rounded-xl h-44">
   {/* Train Image and Header */}
  <section className="flex pt-5 pl-5">
      <Image src={"/s4.png"} alt={"Train"} width={40} height={0}></Image>
      <h2 className="font-bold text-2xl pl-10">TRAIN TRANSPORT</h2>
    </section>
    {/* Train Text */}
    <section className="w-[350px] ml-[105px] -mt-7 text-justify">
<p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
    </section>
    <button className="bg-transparent font-bold hover:text-cyan-500 pl-[105px] pt-4">Read More</button>
  </section>  

    </section>


    {/* About Section */}
    
    <section className="flex mt-[150px] ml-24">
      <h2 className="text-4xl font-bold text-cyan-500">About</h2><h2 className="text-4xl font-bold">Us</h2>
    </section>


    <section className="flex justify-around mt-3">
    {/* About Text */}
    <section className="w-[500px] text-justify pt-2 ml-10">
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All</p>

      <button className="w-32 h-10 bg-cyan-500 text-white hover:bg-blue-950 text-center mt-3">Read More</button>
    </section>

    {/* About Image */}
    <section className="-mt-28">
    <Image src={"/about-img.jpg"} alt={"About"} width={"525"} height={"0"} className="absolute ml-10"></Image>
      <section className="w-[600px] h-[250px] bg-blue-950 mt-14"></section>
    </section>

    </section>



    {/* Tracking Section */}

    <section className="relative mt-28">
        {/* Header Image */}
      <Image src={"/track-bg.jpg"} alt={"Track Image"} width={"500"} height={"0"} className="h-[400px] w-full mt-5 object-cover"></Image>

      <section className="absolute inset-0 bg-gray-700 opacity-50 "></section>

        {/* Text */}
      <section className="absolute inset-0 w-[50%] mt-24 ml-28">
        <h1 className="text-white text-3xl font-bold">TRACK YOUR SHIPMENT.</h1>
        <p className="text-white text-sm text-justify pt-5  w-[550px]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci,
        blanditiis quidem dolorum odit voluptas? Voluptate, eveniet 
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci,
        blanditiis quidem dolorum odit voluptas? Voluptate, eveniet
        </p>
        
        <section className="flex">
        <input type="text" placeholder="Enter Your Tracking Number"  className="w-[400px] h-10 mt-4 pl-2" />
        <button className="bg-cyan-500 w-[150px] h-10 text-center text-white mt-4 hover:bg-blue-950">Track</button>
        </section>

        </section>      
  
      </section>


      {/* Client Review Section */}
      <section className="flex mt-[100px]">
      <h2 className="text-4xl font-bold ml-24">What Our</h2>
      <h2 className="text-4xl font-bold text-cyan-500 pl-3">Client</h2>
      <h2 className="text-4xl font-bold pl-3">Says</h2>
      </section>

    <section className="flex ml-24 mt-10">

    {/* Client Review Text 1 */}
    <section className=" w-[430px] h-[200px] border-[1px] border-gray-400 rounded-sm text-justify p-5">
        <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur 
        libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
        orem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam,
        </p>
      </section>

      {/* Client Review Text 2 */}
      <section className=" w-[430px] h-[200px] border-[1px] border-gray-400 rounded-sm text-justify p-5 ml-8">
        <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur 
        libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
        orem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam,
        </p>
      </section>

    </section>

    {/* Client Images */}
   <section className="flex gap-x-[215px]">

   <section className="flex ml-24 mt-5" >
      <Image src={"/client-1.png"} alt={"Client 1"} width={70} height={0}></Image>
      <h4 className="pl-5 pt-5 text-lg">Client 1</h4>
    </section>

    <section className="flex ml-24 mt-5" >
      <Image src={"/client-2.png"} alt={"Client 2"} width={70} height={0}></Image>
      <h4 className="pl-5 pt-5 text-lg">Client 2</h4>
    </section>

   </section>


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
export default Mainpage