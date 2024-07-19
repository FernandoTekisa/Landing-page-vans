import Image from "next/image"
import logo from "/public/logo.png"

export default function Header() {
    return(
        <header>
            <nav className="flex justify-around items-center top-0 fixed bg-red-300 blur-none border-b-4 w-full">
                <div>
                    <a href="#">
                    <Image
                    src={logo}
                    alt="Logo do site - vans"
                    width={100}
                    height={100}
                    />
                    </a>
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-5">
                        <li className="text-lx hover:underline"><a href="#">Home</a></li>
                        <li className="text-lx hover:underline"><a href="#">Shoes</a></li>
                        <li className="text-lx hover:underline"><a href="#">Men</a></li>
                        <li className="text-lx hover:underline"><a href="#">Women</a></li>
                        <li className="text-lx hover:underline"><a href="#">Kids</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
