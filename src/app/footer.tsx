import Link from "next/link"

function Footer(){
    return(
        <main>
            <section className="w-full h-[300px] bg-blue-950 mt-[100px] flex justify-evenly">
            {/* Address Section */}
            <section className="pt-[60px]">
            <h2 className="font-semibold text-white text-2xl">Address</h2>
            <p className=" hover:text-cyan-500 text-white pt-5"> <i className="fa fa-phone"></i> Call : +01 123456789</p>
            <p className=" hover:text-cyan-500 text-white pt-3"> <i className="fa fa-envelope"></i> Email: demo@gmail.com</p>
            <p className=" hover:text-cyan-500 text-white pt-3"> <i className="fa fa-map-marker"></i> Location</p>
            {/* SocialMedia Logos */}
            <section className="flex gap-3 text-white text-[25px] mt-6 ">
            <i className="fa fa-facebook hover:text-cyan-500"></i>
            <i className="fa fa-instagram hover:text-cyan-500"></i>
            <i className="fa fa-twitter hover:text-cyan-500"></i>
            <i className="fa fa-linkedin hover:text-cyan-500"></i>
            </section>
            </section>

            {/* Info Section*/}
            <section className="text-white w-[220px] pt-[60px]">
                <h2 className="font-semibold text-2xl">Info</h2>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur, nostrum ab minima eligendi magni quae possimus maiores excepturi om</p>
            </section>

            {/* Links Section */}
            <section className="text-white pt-[60px]">
                <h2 className="font-semibold text-2xl">Links</h2>
                <section className="grid grid-rows-4 mt-2">
                <Link href={"/"} className="hover:text-cyan-500 pt-3">Home</Link>
                <Link href={"/services"} className="hover:text-cyan-500 pt-3">Services</Link>
                <Link href={"/about"} className="hover:text-cyan-500 pt-3">About</Link>
                <Link href={"/contact"} className="hover:text-cyan-500 pt-3">Contact Us</Link>
                </section>
            </section>

            
            {/* Subscribe Section */}
            <section className="text-white pt-[60px]">
            <h2 className="font-semibold text-2xl">Subscribe</h2>
            <section>
            <input type="email" placeholder="Your Email" className="bg-transparent border-b-[1px] mt-4 w-[300px]"/>
            </section>
            <button className="bg-cyan-500 text-center w-[300px] h-12  mt-5 hover:bg-blue-900">Subscribe</button>
            </section>

            
            </section>

            {/* Trademark Text */}
            <p className="text-center p-5">© 2024  All  Rights  Reserved  By  TruckIn & Co</p>
        </main>
    )
}
export default Footer