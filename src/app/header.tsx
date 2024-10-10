import Link from "next/link"
function Header(){
    return(
        <main className="border-b-2 h-[120px]">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        <section className="flex justify-between items-center pl-5 pr-5 bg-blue-950 text-white h-10">
            <p className=" hover:text-cyan-500 "> <i className="fa fa-phone"></i> Call : +01 123456789</p>
            <p className=" hover:text-cyan-500 "> <i className="fa fa-envelope"></i> Email: demo@gmail.com</p>
            <p className=" hover:text-cyan-500 "> <i className="fa fa-map-marker"></i> Location</p>
        
        </section>

            <section className="flex justify-between w-full  items-center bg-white">

            <h2 className="pl-10 font-bold text-3xl pt-5">TruckIn</h2>
           <nav>
           <ul className="flex gap-x-10 mr-14 text-lg font-medium pt-5">
                <li className="hover:text-cyan-500"><Link href={"/"}>Home</Link></li>
                <li className="hover:text-cyan-500"><Link href={"/services"}>Services</Link></li>
                <li className="hover:text-cyan-500"><Link href={"/about"}>About</Link></li>
                <li className="hover:text-cyan-500"><Link href={"/contact"}>Contact</Link></li>
                <li className="hover:text-cyan-500"><i className="fa fa-user"></i> <Link href={""}>LOGIN</Link></li>
            </ul>
           </nav>

            </section>
            
        </main>
    )
}
export default Header