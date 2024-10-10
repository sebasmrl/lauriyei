import Link from "next/link"


const items:{href:string, title:string}[] = [
    {
        title:'¿Quienes Somos?',
        href:'/quienes-somos'
    },
    {
        title:'Servicios',
        href:'/servicios'
    },
    {
        title:'Nuestros Clientes',
        href:'/nuestros-clientes'
    },
    {
        title:'Contactanos',
        href:'/contactanos'
    },
]

export const NavLinks = ({pathname}:{pathname:string}) => {
    return (
        <>
        {
            items.map( (item)=>
            (<Link
                key={item.title}
                href={item.href} className={`flex items-center px-2 w-full justify-center md:w-auto text-nav-title font-semibold hover:bg-cyan-700 hover:text-white  h-full transition-all ${pathname == item.href && 'bg-cyan-500 text-white'}`} 
            >
                <span>{item.title}</span>
            </Link>))
            }
</>
    )
}
