import Image from "next/image";

function ServicePage(){
    return(

        <main>

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

        </main>


    )
}

export default ServicePage