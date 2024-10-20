import { ServiceCard } from "@/components";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";



export const metadata:Metadata = {
    title: 'Servicios',
    description: 'Conoce el gran abanico de opciones que tenemos para ti, nuestros esfuerzos se destinan a garantizar que lo tuyo perdure y tenga el funcionamiento idoneo.',
    keywords: ['servicios', 'lauriyei servicios', 'que hace lauriyei', 'servicios lauriyei', 'mantenimiento de piscinas ibague' ],
    authors: [ { name:'Wilmer Ramirez'}],
    applicationName: 'LauriYei'
};



export default function Servicios() {
    return (
        <div className="flex flex-col">



            <section className="relative  bg-no-repeat bg-transparent overflow-hidden">
                <div className="-z-10 absolute w-full bg-slate-800 opacity-50  h-full "></div>
                <Image className=" bg-transparent absolute -z-20 " src={"/assets/generics/employees/edwin.webp"} alt={"Imagen de fondo de Nuestros Servicios"} width={450} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />

                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h2 className="mb-2 text-4xl font-extrabold text-gray-100  md:text-5xl lg:text-6xl tracking-tight leading-none ">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-400 drop-shadow-[0px_2px_15px_rgba(255,255,255,0.6)] " >
                            Servicios
                        </span> Lauriyei
                    </h2>
                    <p className="mb-8 text-lg font-normal text-gray-100 lg:text-2xl sm:px-16 lg:px-48">Contamos con un gran abanico de opciones para ti, nuestros esfuerzos se destinan a garantizar que lo tuyo perdure y tenga el funcionamiento idoneo.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link href="/contactanos" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-cyan-900 rounded-lg bg-cyan-400 hover:bg-cyan-200 focus:ring-4 focus:ring-blue-300 ">
                            Contactar
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                        <Link href="/" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Volver a Home
                        </Link>
                    </div>
                </div>
            </section>


            <br />
            <br />

            <section id="services" className="flex flex-wrap justify-center gap-x-4 gap-y-6 movil:mx-10 tablet:mx-16 py-14 ">

                <ServiceCard title={"Asesorías"} description={"Realizamos asesorías hídricas de piscinas, tratamiento de aguas, asesoría quimica de aguas para sitios recreativos, de equipamiento de piscinas e.t.c."} imgUrl={"/assets/clientes/casa-quinta/img-2.jpg"} />
                <ServiceCard title={"Mantenimiento de piscinas y Jacuzzis"} description={"Realizamos aspirado , cepillado, limpieza de rejillas , canastillas y filtros. Limpieza de cuarto de máquinas y cuidados necesarios con los equipos de mantenimiento."} imgUrl={"/assets/clientes/casa-quinta/img-1.jpg"} />
                <ServiceCard title={"Tratamiento de aguas"} description={"Matenemos los estándares de calidad del agua según la ley 1209 del 2008, dando lugar a aguas recreativas saludables y amigables con el medio ambiente."} imgUrl={"/assets/clientes/clubes/img-1.jpg"} />
                <ServiceCard title={"Mantenimiento de filtros"} description={"Reemplazo de la carga filtrante, desinfección de filtro, reparación flautas y válvulas multiports."} imgUrl={"/assets/clientes/casa-quinta/img-6.jpg"} />
                <ServiceCard title={"Mantenimiento de Tanques de Reserva"} description={"Lavado del tanque,  cepillado, desinfección y puesto en funcionamiento nuevamente."} imgUrl={"/assets/clientes/casa-quinta/jacuzzis/img-1.jpg"} />

            </section>

            <hr />

            {/* <section className="flex flex-col py-14 movil:px-4">
                <h3 className="self-center font-bold text-4xl text-cyan-900 pb-2">Equipo de Trabajo</h3>
                <p className="self-center text-center text-xl">Conoce nuestro equipo de trabajo 100% capacitado para transformar tu entorno.</p>

                <div className="flex flex-wrap tablet:mx-16 mt-8 gap-12 justify-center" >
                    <EmployeeCard name={"name"} position={"Líder Operativo"} imgUrl={"https://placehold.co/200x200/FFFFFF/000000/png"} />
                    <EmployeeCard name={"name"} position={"Operario"} imgUrl={"https://placehold.co/200x200/FFFFFF/000000/png"} />
                    <EmployeeCard name={"name"} position={"Operario"} imgUrl={"https://placehold.co/200x200/FFFFFF/000000/png"} />                    
                </div>
            </section> */}

            <br />
        </div>
    )
}


{/* <div className="max-w-md mx-auto bg-slate-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <details className="p-4 transition-all">
        <summary className="flex items-center cursor-pointer">
            <Image className="w-16 h-16 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Imagen de ejemplo" width={200} height={200} />
            <div>
                <h2 className="text-xl font-semibold text-gray-900">Título del Detalle</h2>
                <p className="text-gray-500">Haz clic para ver más detalles</p>
            </div>
        </summary>
        <div className="mt-4 transition-all">
            <p className="text-gray-700">Esta es la descripción detallada que se muestra cuando se expande el elemento <code>&lt;details&gt;</code>. Puedes incluir cualquier contenido aquí, como texto adicional, imágenes, enlaces, etc.</p>
        </div>
    </details>
</div> */}