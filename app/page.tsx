import Header from "./components/Header";
import Conteiner from "./Conteiner";
import Image from "next/image";
import foto1 from "/public/vans-pessoa.jpg"
import foto2 from "/public/vans-pessoa2.jpg"
import foto3 from "/public/vans-shoes.jpg"

export default function Home() {
  return(
    <div>
      <header>
        <div>
            <Header/>
        </div>
      </header>
    <div>
      <Conteiner/>
    </div>
    <section className="flex justify-center items-center  mx-8 my-8">
      <div className="flex gap-3">
      <Image
      src={foto1}
      alt="foto1"
      width={400}
      height={600}
      className=" rounded-sm"
      />
      <Image
      src={foto2}
      alt="foto1"
      width={400}
      height={600}
      className=" rounded-sm"
      />
      <Image
      src={foto3}
      alt="foto1"
      width={400}
      height={400}
      className=" rounded-sm"
      />
      </div>
    </section>
    </div>
  )
}
