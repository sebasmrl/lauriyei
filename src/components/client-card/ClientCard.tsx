import Image from "next/image"
import Link from "next/link"

interface Props{
    title: string;
    description:string;
    url?:string;
    imgUrl:string
}

export const ClientCard = ({title, description, url="/nuestros-clientes", imgUrl}:Props) => {
  return (
    

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
    <div className=" overflow-hidden">
        <Image className="hover:scale-110 rounded-t-lg transition duration-500 cursor-pointer " src={imgUrl} alt="" width={300} height={300} style={{height:'100%', width:'100%'}} />
    </div>
    

    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{ title }</h5>
        <p className="mb-3 font-normal text-gray-700 ">{ description}</p>
        <Link href={url} className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-400 rounded-lg hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Ir a Visitarlos 
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

  )
}
