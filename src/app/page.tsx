import { ClientCard } from "@/components";
import { Slider } from "@/components/slider/Slider";
import { slideHomeData } from "@/staticdata";
import Image from "next/image";
import Link from "next/link";
//import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col ">


      <h1 className="text-center mt-20 font-bold text-5xl sm:text-5xl md:w-2/3 md:text-7xl text-gray-700 self-center movil:px-4 movil:mt-12"><span className="text-cyan-400">Lauriyei <span className="movil:invisible tablet:visible text-gray-700">-</span></span> Mantenimiento de Piscinas y Jacuzzis <span className="hidden">en Ibagué</span></h1>
      <p className=" mt-8 mb-10 text-lg md:text-2xl md:w-2/3 text-center self-center text-pretty movil:px-4" >Somos una empresa líder en el mantenimiento de piscinas y jacuzzis que opera en la ciudad de <span className="font-bold">Ibagué</span> y <span className="font-bold">municipios aledaños</span>, trabajamos con piscinas privadas, publicas, conjuntos residenciales, casa quinta, constructoras y toda persona natural o jurídica que requiera de nuestros servicios profesionales.</p>

      <Slider slideData={slideHomeData} />


      <section className="mt-10 flex movil:flex-col tablet:flex-row md:flex-row self-center h-slide w-full flex-nowrap">

        <div className="movil:order-2 tablet:order-1 flex flex-col justify-center">
          <p className=" self-start movil:self-center pb-2 movil:text-center movil:text-5xl sm:text-6xl lg:text-6xl "> <span>en Ibagué</span>
            <span className="movil:text-6xl md:text-8xl text-cyan-400">+5</span> años de experiencia
          </p>

          <p className="text-xl movil:pl-7 tablet:pl-24 movil:pt-2 text-pretty md:text-xl lg:text-2xl w-[90%]">
            Empezamos en 2019 y no hemos parado de generar sonrisas,
            nuestro compromiso va más allá, por ello implementamos
            todas las medidadas de salubridad para que tu y los tuyos ¡disfruten cada momento!
          </p>
        </div>
        <div className="movil:order-1 tablet:order-2 movil:w-[66%]  movil:self-end tablet:w-full  movil:mb-4 md:w-full tablet:h-full " >
          <Image
            src={'/assets/desing/section.svg'}
            alt=""
            width={200}
            height={200}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </section>


      <section className="movil:mt-10 tablet:mt-0  flex-col tablet:flex-row flex md:h-slide justify-center movil:mb-10 md:mb-0">
        <div className="h-full w-full ">
          <Image

            alt="Imagen Eco-friendly"
            src={"/assets/svgs/boy-swimming-98.svg"} //boy-swimming-98 ecology-1
            width={600}
            height={400}
            style={{ height: '100%', width: '100%' }}

          />
        </div>
        <div className=" flex flex-col justify-center w-full movil:px-7 tablet:pl-4 tablet:pr-16 ">
          <h2 className="text-5xl font-semibold pb-2 movil:text-center tablet:text-start ">Somos 100% <span className="text-cyan-400">Eco Friendly</span></h2>
          <p className=" text-xl tablet:text-2xl ">Sabemos lo indispensable que es el agua para la vida, ¡nuestro planeta lo necesita!.</p>
          <p className="text-xl tablet:text-2xl">Por ello cada dia ponemos nuestro granito de arena mejorando la calidad del agua</p>
        </div>
      </section>

      <hr className="tablet:hidden" />



      <section className="flex flex-col movil:mx-4  tablet:mb-5 movil:mt-14 tablet:mt-5">
        <h2 className="self-center text-center  text-5xl font-semibold mb-5">Nuestros Clientes</h2>
        <p className="tablet:text-center self-center text-xl tablet:text-2xl tablet:mx-0 movil:mx-3">Ya son mas de 50 empresas, clubes, conjuntos y personas que confian en nosotros</p>
        <p className="tablet:text-center self-center text-xl tablet:text-2xl text-pretty mb-5 tablet:mx-0 movil:mx-3">No esperes más y sé parte de esta gran familia</p>

        {/* ClientCard  */}
        <div className="overflow-hidden movil:mx-6 tablet:mx-16 ">

          <div className="py-8 flex flex-col  movil:h-[300px] tablet:h-[350px] items-center gap-16 flex-wrap overflow-auto  mb-10 scrollbar-custom">
            <ClientCard imgUrl="/assets/clientes/clubes/img-1.jpg" />
            <ClientCard imgUrl="/assets/clientes/conjuntos/img-4.jpg" />
            <ClientCard imgUrl="/assets/clientes/conjuntos/img-2.jpg" />
            <ClientCard imgUrl="/assets/clientes/conjuntos/img-4.jpg" />
            <ClientCard imgUrl="/assets/clientes/casa-quinta/img-4.jpg" />
            <ClientCard imgUrl="/assets/clientes/casa-quinta/img-2.jpg" />
            <ClientCard imgUrl="/assets/clientes/casa-quinta/jacuzzis/img-1.jpg" />
          </div>
        </div>

        <Link
          href={"/nuestros-clientes"}
          className="text-center movil:mx-4 tablet:self-center rounded px-4 py-2 hover:bg-cyan-400 bg-cyan-200 text-cyan-700 outline outline-1 -outline-offset-1 outline-cyan-700  active:bg-cyan-100 hover:text-white hover:outline-none font-medium" >
          Ver más
        </Link>
      </section>


      <hr />


      <section className="flex flex-col tablet:flex-row  movil:mx-8  tablet:m-16 overflow-hidden justify-center movil:mt-16 tablet:mt-10 mb-16">
        <div className="flex flex-col justify-center cursor-default">
          <h2 className="font-semibold text-5xl pb-3 text-cyan-900">¿Donde Ubicarnos?</h2>
          <p className="text-xl">Te preguntarás ¿como ubicarnos? Pensando en tu comodidad modernizamos nuestros canales de atención y ya no necesitas movilizarte a nuestra sucursal,
            solo debes contactarnos y estaremos contigo a la mayor brevedad</p>
          <br />
          <p className="text-xl text-cyan-700 font-semibold">Nuestros clientes son lo más importante</p>
          <Link
            href={"/contactanos"}
            className="movil:text-center movil:mt-4 tablet:self-end rounded px-4 py-2 hover:bg-cyan-400 bg-cyan-200 text-cyan-700 outline outline-1 -outline-offset-1 outline-cyan-700  active:bg-cyan-100 hover:text-white hover:outline-none font-medium" >
            Contactanos
          </Link>

        </div>

        <Image
          className=""
          src={"assets/svgs/map.svg"}
          alt=""
          width={400}
          height={400} />
      </section>





    </div>
  );
}
