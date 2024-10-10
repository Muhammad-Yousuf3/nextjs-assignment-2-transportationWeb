import Image from "next/image"

function Aboutpage(){
    return(

        <main>


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

        </main>

    )
}
export default Aboutpage