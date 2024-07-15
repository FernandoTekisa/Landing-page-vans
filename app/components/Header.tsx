import Image from "next/image"
import logo from "/public/vans-logo.jpg"

export default function Header() {
    return(
        <header>
            <nav className="flex justify-around items-center top-0  border-b-4 w-full">
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
                        <li className="text-sm hover:underline text-slate-400"><a href="#">Home</a></li>
                        <li className="text-sm hover:underline text-slate-400"><a href="#">Shoes</a></li>
                        <li className="text-sm hover:underline text-slate-400"><a href="#">Men</a></li>
                        <li className="text-sm hover:underline text-slate-400"><a href="#">Women</a></li>
                        <li className="text-sm hover:underline text-slate-400"><a href="#">Kids</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
