import Image from "next/image"
import vans1 from "/public/vans1.webp"
import vans2 from "/public/vans-2.webp"
import vans4 from "/public/vans-3.webp"

export function KnuSchool() {
    return(
        <div className="flex justify-center items-center text-center">
            <section>
                <div className="m-5">
                    <h1 className="text-4xl">Shoes vans Knu School</h1>
                </div>
                <div className="flex justify-center items-center my-5 gap-7">
                    <div>
                        <Image src={vans1}alt="tênis da vans" width={300} height={300} className="hover:border-2"/>
                        <div>
                        <h3 className="flex justify-start items-start">Vans knu school - Black White</h3>
                        <p className="flex justify-start items-start">345$</p>
                        </div>
                    </div>

                    <div>
                        <Image src={vans2}alt="tênis da vans" width={300} height={300} className="hover:border-2"/>
                        <div>
                        <h3 className="flex justify-start items-start">Vans knu school - White</h3>
                        <p className="flex justify-start items-start">345$</p>
                        </div>
                    </div>

                    <div>
                        <Image src={vans4}alt="tênis da vans" width={300} height={300} className="hover:border-2"/>
                        <div>
                        <h3 className="flex justify-start items-start">Vans knu school - Panda</h3>
                        <p className="flex justify-start items-start">345$</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}