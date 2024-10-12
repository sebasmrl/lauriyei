import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="antialiased flex flex-col items-center justify-center h-[91vh] pb-24">

            <Image
                src={"/assets/svgs/404-page-not-found.svg"}
                alt=""
                width={400}
                height={200}
                style={{ scale: 1.1 }}
            />

            <div className='flex flex-col items-center justify-center -translate-y-8'>

            <p className='text-cyan-800 text-4xl font-bold text-center'>¡Upps! esta página no existe</p>
            <Link
                href={"/"}
                className="movil:text-center movil:mt-4  rounded px-4 py-2 hover:bg-cyan-400 bg-cyan-200 text-cyan-700 outline outline-1 -outline-offset-1 outline-cyan-700  active:bg-cyan-100 hover:text-white hover:outline-none font-medium" >
                Volver al Inicio
            </Link>
            </div>
        </div>
    )
}