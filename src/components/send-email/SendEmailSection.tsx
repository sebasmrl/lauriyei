'use client';

import Image from "next/image";
import { IoIosSend } from "react-icons/io";

// TODO: implemment functionality 
export const SendEmailSection = () => {
    return (
        <form
            className="flex flex-col rounded tablet:mx-16 tablet:px-20 pt-20 pb-16  gap-2 relative bg-slate-200 bg-opacity-30"
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("TODO: Send email pendding implementation");
            }}
        >
            <Image
                className="self-center absolute -z-10  top-[calc(50%_-_75px)] w-[310px] opacity-55"
                src={"/assets/logo-lauriyei-sin-fondo.png"}
                alt={""}
                width={290}
                height={200}
                style={{ height: 'auto' }}

            />
            <h3 className="text-4xl font-bold self-center pb-6 text-slate-800 drop-shadow-sm">Envianos un correo</h3>

            <div className="flex flex-col items-center movil:w-[80%] tablet:w-2/3 self-center">
                <label className="self-start font-semibold w-auto  movil:min-w-20 tablet:min-w-48" htmlFor="name">Nombre u Organizacion:</label>
                <input id="name" name="name" type="text" className=" w-full py-1 px-2 rounded  active:outline-2 focus-visible:outline-2 bg-opacity-30 bg-white  outline outline-1 outline-cyan-600 focus-visible:outline-cyan-500" />
            </div>

            <div className="flex flex-col items-center movil:w-[80%] tablet:w-2/3 self-center">
                <label className="self-start font-semibold w-auto movil:min-w-20 tablet:min-w-48 " htmlFor="email">Correo Electrónico:</label>
                <input id="email" name="email" type="email" className=" w-full py-1 px-2 rounded focus:outline-2 active:outline-2 focus-visible:outline-2 bg-opacity-30 bg-white outline outline-1 outline-cyan-600 focus-visible:outline-cyan-500" />
            </div>

            <div className="flex flex-col items-center movil:w-[80%] tablet:w-2/3 self-center">
                <label className="self-start font-semibold w-auto movil:min-w-20 tablet:min-w-48" htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" rows={4} className=" w-full p-2 rounded  focus:outline-2 active:outline-2 focus-visible:outline-2 bg-opacity-30 bg-white outline outline-1 outline-cyan-600 focus-visible:outline-cyan-500" />
            </div>
            <div className="flex flex-col self-center movil:w-[80%] tablet:w-2/3">
                <button className="flex items-center gap-2 self-start movil:text-center movil:mt-4 rounded px-4 py-2 hover:bg-cyan-400 bg-cyan-200 text-cyan-700 outline outline-1 -outline-offset-1 outline-cyan-700  active:bg-cyan-100 hover:text-white hover:outline-none font-medium">
                    <IoIosSend /> Enviar
                </button>
            </div>
        </form>
    )
}
