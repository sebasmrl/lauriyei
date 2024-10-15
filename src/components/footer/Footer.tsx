import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-gradient-to-r from-cyan-700 to-cyan-400  bg-opacity-60 px-4 tablet:px-16 overflow-hidden w-full h-full pt-6 pb-3">

        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col gap-0 tablet:text-lg -space-y-1 text-cyan-400 ">
            <h3 className='font-bold'>
              Lauriyei Mantenimientos
            </h3>
            <p className='text-white'> Ibagué - Tolima</p>
            <p className=''><span className="font-bold">Tel:</span> +57 3124252804</p>

          </div>

          <Image
          className="h-[55px] w-[90px] tablet:h-[80px] tablet:w-[150px]"
            src={"/assets/logo-lauriyei-sin-fondo.png"}
            alt={"logo lauriyei"}
            width={225}
            height={150}
            style={{ 
                filter: "drop-shadow(2px 2px 3px #ffffff)",
              }}
          />
        </div>

        <p className="self-center text-cyan-800 tablet:text-lg font-bold pt-1">©2024 Lauriyei® - Derechos Reservados</p>

      </footer>
  )
}
