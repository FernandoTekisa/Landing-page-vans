import Image from "next/image"
import background from "/public/vans-backgroud.jpg"
export default function Home() {
    return(
        <div className="">
    <section className=" flex justify-center items-center  flex-col mt-32 mx-4">
        <Image
        src={background}
        alt="container vans"
        className="flex w-full h-56 rounded-sm"
    />
    </section>
    <div className="mx-7 mt-5">
        <h1 className="text-4xl font-bold text-slate-700">
            I Life is Good
        </h1>
        <h3 className="text-xl text-slate-700">
            Lorem ipsum dolor the style shoes Vans
        </h3>
    </div>
    </div>
    )
}