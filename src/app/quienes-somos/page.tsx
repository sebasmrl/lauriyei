import { MoralAndEthicalValueCard } from "@/components";
import Image from "next/image";
import { FaArrowTrendUp, FaHandHoldingHeart, FaPeopleCarryBox, FaUserGear } from "react-icons/fa6";
import { GiPuzzle } from "react-icons/gi";
import { RiEmpathizeLine } from "react-icons/ri";
//tu felicidad nuestra garantia
export default function QuienesSomos() {
    return (
        <div className="flex flex-col ">

            <div className="flex movil:flex-col tablet:flex-row mt-16 movil:mx-4 tablet:mx-16 gap-2 justify-center items-center tablet:mt-10">

                <div className="flex flex-col justify-center w-full py-10 tablet:py-16 tablet:pl-12 movil:order-2 tablet:order-2">
                    <h1 className="font-bold text-4xl tablet:text-5xl mb-5 text-center tablet:text-left">¿Quienes Somos?</h1>
                    <p className="text-xl tablet:text-2xl mb-2 text-pretty">Hola, mi nombre es <span className="font-bold">Wilmer Ramirez</span>, soy quien está a cargo de Lauriyei Mantenimientos,
                        pero déjame explicarte un poco de que va todo esto:
                    </p>
                    <p className="text-xl tablet:text-2xl">
                        Somos una empresa familiar con más de <span className="font-bold"> 5 años de experiencia</span>,
                        enfocada en brindar soluciones de mantenimiento de piscinas y jacuzzis, motobombas, filtros y tratamiento de aguas;
                        operamos en la ciudad de <span className="font-bold">Ibagué y municipios aledaños</span> generando
                        en +50 establecimientos confianza, seguridad y confort.
                    </p>
                </div>



                <div className="flex justify-center tablet:w-[60%] items-center movil:order-1   tablet:order-2">
                    <div className="h-80 w-80 rounded-full overflow-hidden relative ">
                        <Image
                            src={"/assets/generics/wilmer-ramirez-1.jpg"}
                            alt={"Imagen Wilmer Ramirez"}
                            width={200}
                            height={200}
                            style={{ objectFit: 'cover', width: '100%', height: '100%', transform: 'translate(-20px, -15px)', scale: '1.3' }}
                        />
                    </div>

                    {/* <Image
                        className="absolute top-0 left-0"
                        src={"/"}
                        alt=""
                        width={200}
                        height={200}
                    /> */}
                </div>
            </div>


            <hr />
            <br />
            <br />


            <section className="flex tablet:mt-4 movil:mx-4 tablet:mx-16 tablet:px-12 justify-between movil:gap-16 tablet:gap-32 movil:flex-col tablet:flex-row">

                <div className="flex flex-col w-full  bg-cyan-200 bg-opacity-40 rounded p-7 text-cyan-900 shadow">
                    <div className="flex items-center">
                        <h2 className="text-4xl font-medium mb-2">Misión</h2>
                    </div>
                    <p className="text-xl text-justify ">
                        Lauriyei es una empresa comprometida en brindar servicios integrales
                        de mantemiento del piscinas y jacuzzis con altos estandares de calidad en la ciudad de Ibagué
                        y municipios aledaños, que demuestra responsabilidad ambiental y determinación,
                        factores clave para un desarrollo humano sostenible.
                    </p>
                </div>

                <div className="flex flex-col w-full   rounded p-7 text-cyan-900 shadow">
                    <div className="flex items-center">
                        <h2 className="text-4xl font-medium mb-2">Visión</h2>
                    </div>
                    <p className="text-xl text-justify">
                        Lauriyei se propone, en los proximos 5 años, ser reconocida a nivel departamental
                        como la mejor solución en mantenimiento de piscinas y jacuzzis, motobombas filtros
                        y tratamiento de aguas, caracterizada por la calidad humana y la garantía de satisfación.
                    </p>
                </div>
            </section>

            <br/>
            <br/>
            <br/>
            <hr/>

            <section className="flex flex-col mx-16 movil:mt-10 tablet:mt-2 mb-14">
                <h2 className="text-4xl font-bold text-center mb-8 text-cyan-800 tablet:py-10 rounded">Nuestros Valores</h2>

                <div className="flex movil:gap-8 tablet:gap-16 flex-wrap justify-center">
                    <MoralAndEthicalValueCard title={"Trabajo en equipo:"} description={"Unimos nuestras fuerzas e ideas para alcanzar objetivos."} icon={<FaPeopleCarryBox className="h-16 w-16"/>} />
                    <MoralAndEthicalValueCard title={"Compromiso"} description={"Entrega total en cada servicio."} icon={<FaUserGear className="h-16 w-16"/>} />
                    <MoralAndEthicalValueCard title={"Responsabilidad"} description={"Realizamos eficientemente nuestras tareas"} icon={<GiPuzzle className="h-16 w-16"/>} />
                    <MoralAndEthicalValueCard title={"Respeto"} description={"Consideramos a los demás como a nosotros mismos."} icon={<RiEmpathizeLine className="h-16 w-16"/>} />
                    <MoralAndEthicalValueCard title={"Amor"} description={"Creemos que haciendo las cosas con amor los resultados son mejores."} icon={<FaHandHoldingHeart  className="h-16 w-16"/>} />
                    <MoralAndEthicalValueCard title={"Dedicación"} description={"Cuidamos lo tuyo como si fuese nuestro"} icon={<FaArrowTrendUp  className="h-16 w-16"/>} />
                </div>
            </section>



        </div>
    )
}