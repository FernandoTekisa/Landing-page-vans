import Header from "../components/Header";
import Background from "../components/Background";
import { KnuSchool } from "../components/KnuSchool";
import { Upland } from "../components/Upland";
import Image from "next/image";
import foto1 from "/public/vans-pessoa.jpg"
import foto2 from "/public/vans-pessoa2.jpg"
import foto3 from "/public/vans-shoes.jpg"
import foto4 from "/public/vans-topboys.jpg"
import { Footer } from "../components/Footer";



export default async function Home() {

 await new Promise(resolve => setTimeout(resolve,1000))


  return (
    <div className="">
      <header>
        <div>
          <Header />
        </div>
      </header>
      <div>
        <Background />
      </div>
      <div className="flex justify-center items-center flex-col mx-8 my-8">
        <h1 className="text-4xl font-bold text-slate-700">
          Life is Good
        </h1>
        <div>
          <div>
            <h3 className="text-xl text-slate-700">
              Lorem ipsum dolor the young style shoes Vans
            </h3>
          </div>
        </div>
      </div>
      <section className="flex justify-center items-center flex-col  mx-8 my-8">
        <div className="flex gap-5 mx-8 my-8">
          <Image src={foto1} alt="foto2" width={550} height={550} className="" />
          <Image src={foto2} alt="foto2" width={550} height={550} className="" />
        </div>
        <div className="flex gap-5 mx-8 my-8">
          <Image src={foto3} alt="foto3" width={550} height={550} className="" />
          <Image src={foto4} alt="foto3" width={550} height={550} className="" />
        </div>
      </section>
      <div>
        <KnuSchool />
      </div>
      <div>
        <Upland />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
