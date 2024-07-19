import Image from "next/image"
import vans1 from "/public/upland-1.webp"
import vans2 from "/public/upland-2.webp"
import vans3 from "/public/upland-3.webp"
import vans4 from "/public/upland-4.webp"
export function Upland() {
    return(
        <div className="flex justify-center items-center text-center">
            <section>
                <div className="m-5">
                    <h1 className="text-4xl">Shoes vans Upland</h1>
                </div>
                <div className="flex justify-center items-center my-5 gap-7">
                    <div>
                        <Image src={vans1}alt="tênis da vans" width={300} height={300} className="hover:border-2"/>
                        <div>
                        <h3 className="flex justify-start items-start">Vans Upland - White </h3>
                        <p className="flex justify-start items-start">445$</p>
                        </div>
                    </div>

                    <div>
                        <Image src={vans4}alt="tênis da vans" width={300} height={300} className="hover:border-2"/>
                        <div>
                        <h3 className="flex justify-start items-start">Vans Upland - Black</h3>
                        <p className="flex justify-start items-start">445$</p>
                        </div>
                    </div>

                    <div>
                        <Image src={vans2}alt="tênis da vans" width={300} height={300} className="hover:border-2"/>
                        <div>
                        <h3 className="flex justify-start items-start">Vans knu school - White</h3>
                        <p className="flex justify-start items-start">445$</p>
                        </div>
                    </div>

                    <div>
                        <Image src={vans3}alt="tênis da vans" width={300} height={300} className="hover:border-2"/>
                        <div>
                        <h3 className="flex justify-start items-start">Vans Upland - Black</h3>
                        <p className="flex justify-start items-start">445$</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}