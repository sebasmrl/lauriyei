import { SendEmailSection } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoCallOutline, IoLogoWhatsapp } from "react-icons/io5";

export default function Contactanos() {

    return (
        <div className="flex flex-col">

            <section className="flex movil:flex-col tablet:flex-row self-center pt-4">
                <Image
                    className="self-center px-4 movil:w-[400px] movil:h-[400px] tablet:w-[500px] tablet:h-[500px]"
                    src={"/assets/svgs/chatting.svg"}
                    alt=""
                    width={350}
                    height={100}
                />
                <div className="flex flex-col self-center movil:mx-4 tablet:mx-16 mb-16">
                    <h1 className="text-6xl font-bold self-center mt-10">Contactanos</h1>
                    <p className="self-center text-center text-2xl text-pretty">¡Para comunicarte con nosotros estas a un solo clic de distancia! </p>
                    <div className="flex movil:flex-col tablet:flex-row self-center gap-2 mt-7 ">
                        <Link target="_blank" href={"https://wa.me/573124252804"} className="flex self-center items-center text-3xl font-bold hover:bg-green-600 hover:text-white p-2 text-green-600 rounded transition-all">
                            <IoLogoWhatsapp className="h-10 w-10 pr-2" />
                            <span>Whatsapp</span>
                        </Link>
                        <Link target="_blank" href={"tel:573124252804"          } className="flex self-center items-center text-3xl font-bold movil:mt-2 tablet:mt-0 hover:bg-gray-600 hover:text-white p-2 text-gray-600 rounded transition-all">
                            <IoCallOutline className="h-10 w-10 pr-2" />
                            <span>Llamada</span>
                        </Link>
                    </div>

                </div>
            </section>

            <SendEmailSection />





            <div className="flex flex-col my-8">
                <h2 className="text-center text-xl font-semibold text-cyan-900">Siguenos en nuestras redes sociales:</h2>

                <div className="flex self-center gap-2">
                    <Link target="_blank" href={"https://www.instagram.com/mantenimiento_de_piscinas_wil"} className="flex self-center items-center text-xl font-bold mt-2 text-orange-500 hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-400 hover:text-white p-2 rounded transition-all">
                        <FaInstagram className="h-8 w-8 pr-2" />
                        <span>Instragram</span>
                    </Link>
                    <Link target="_blank" href={"https://www.facebook.com/mantenimientopiscinass"} className="flex self-center items-center text-xl font-bold mt-2 hover:bg-blue-600 hover:text-white p-2 text-blue-600 rounded transition-all">
                        <FaFacebook className="h-8 w-8 pr-2" />
                        <span>Facebook</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}