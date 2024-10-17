import { MasonryGrid } from "@/components";
import { Metadata } from "next";
import { IoIosInformationCircleOutline } from "react-icons/io";



export const metadata:Metadata = {
    title: 'Nuestros Clientes',
    description: 'Seguimos siendo consecuentes con nuestro objetivo, por eso ya son +50 clientes que confian en nosotros',
    keywords: ['nuestros clientes', 'lauriyei clientes', 'que clientes tiene lauriyei', 'mantenimiento de piscinas ibague' ],
    authors: [ { name:'Wilmer Ramirez'}],
    applicationName: 'LauriYei'
};



export default function NuestrosClientes() {
    return (
        <div className="flex flex-col">
            <h2 className="self-center movil:text-4xl tablet:text-5xl font-bold text-cyan-800 mt-8 mb-4">Nuestros Clientes</h2>

            <p className="text-xl movil:px-6 tablet:px-20 text-center text-pretty">Seguimos siendo consecuentes con nuestro objetivo, por eso ya son <span className="font-bold text-cyan-500">+50 clientes</span> que confian en nosotros,
                abarcando empresas, conjuntos residenciales, piscinas privadas, publicas, casa quinta y constructoras que dan fe 
                de nuestro <span className="font-bold">compromiso</span> y <span className="font-bold">dedicación</span> continua por brindar servicios de calidad en la ciudad de Ibagué y municipios aledaños.
            </p>

            <MasonryGrid />

            <div className="flex items-center text-xl py-2 movil:mx-4 tablet:mx-16 px-4 bg-cyan-100 rounded self-center movil:mt-5 movil:mb-10 tablet:my-10 text-cyan-800">
                <IoIosInformationCircleOutline className="text-3xl font-bold" />
                <p>
                    <span className="text-xl font-bold">Nota:</span> Por motivos legales y salvaguardando 
                    la privacidad de nuestros clientes <span className="font-semibold underline ">Lauriyei</span> se reserva el derecho de divulgación de nombres.
                </p>
            </div>

        </div>
    )
}
