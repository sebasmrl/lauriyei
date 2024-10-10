import { Header } from "@/components/header/Header";
import { Slider } from "@/components/slider/Slider";
import { slideHomeData } from "@/staticdata";
import Image from "next/image";
//import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <h1 className="text-center mt-20 font-bold text-3xl sm:text-5xl md:w-2/3 md:text-7xl text-gray-700 self-center movil:px-4 movil:mt-12">Mantenimiento de Piscinas y Jacuzzis</h1>
      <p className=" mt-8 mb-10 text-sm md:text-lg md:w-2/3 text-center self-center text-pretty movil:px-4" >Somos una empresa líder en el mantenimiento de piscinas y jacuzzis que opera en la ciudad de <span className="font-bold">Ibagué</span> y <span className="font-bold">municipios aledaños</span>, trabajamos con piscinas privadas, publicas, conjuntos residenciales, casa quinta, constructoras y toda persona natural o jurídica que requiera de nuestros servicios profesionales.</p>

      <Slider slideData={slideHomeData} />


      <section className="mt-10 flex movil:flex-col tablet:flex-row md:flex-row self-center h-slide w-full flex-nowrap">

        <div className="movil:order-2 tablet:order-1 flex flex-col justify-center">
          <p className=" self-start movil:self-center pb-2 movil:text-center movil:text-3xl sm:text-4xl lg:text-6xl ">
            <span className="movil:text-5xl md:text-8xl text-cyan-400">+5</span> años de experiencia
          </p>
            
          <p className="movil:pl-7 tablet:pl-24 movil:pt-2 text-pretty md:text-xl lg:text-2xl w-[90%]">
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


      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <p className="absolute self-end text-pretty movil:top-[10vw] md:top-[15vw] movil:left-3 md:left-16 movil:w-1/3 md:w-1/2 movil:text-[5vw] md:text-6xl ">Porque creemos que somos parte de ti</p>
       <p className="hidden absolute self-end ">por eso siempre traemos lo mejor </p> */}

    </div>
  );
}





{/* <div className="px-2 md:px-16 h-80 md:h-slide">
        <Image 
          className="rounded h-full"
          src={'/assets/generics/f-gen-1.jpeg'} ///assets/clientes/club-land-stoneville/img-1.jpg
          alt='club-land-stoneville'
          width={400}
          height={100}
          style={ { width:'100%', overflow:"hidden", objectFit:'cover'} }
        /> 
       </div> */}