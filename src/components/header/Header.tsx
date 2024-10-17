import Image from "next/image"
import Link from "next/link"
import { Nav } from "../nav/Nav";


export const Header = () => {

    return (
            <header className="bg-white sticky px-5 sm:px-16 top-0 flex flex-wrap w-full z-[20] md:h-20 mx-auto justify-between items-center  text-gray-700 bg-opacity-40  backdrop-blur-sm ">
                
                <Link className="flex justify-center h-full transition-all" href={'/'}>
                    <Image
                        className="aspect-video"
                        src={'/assets/logo-lauriyei-sin-fondo.png'}
                        alt={'Logo LAURIYEI'}
                        width={100}
                        height={20}
                        style={{ width: 'auto', maxHeight: '5rem', padding:'.7rem' }}
                    />
                </Link>
                <Nav/>
            </header>
    )
}
