import Image from 'next/image'

interface Props{
    title: string;
    description: string;
    imgUrl: string;
}

export const ServiceCard = ({ title, description, imgUrl}:Props) => {
    return ( 
        <div className="overflow-hidden flex flex-col items-center border border-gray-200 rounded-lg tablet:flex-row md:max-w-xl hover:bg-gray-100  shadow-lg cursor-pointer md:hover:scale-[1.15] transition-all max-h-64 min-h-52">
            <Image className="object-cover w-full  h-52 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imgUrl} alt="imagen de un servicio" width={200} height={200} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-900">{ title }</h5>
                <p className="mb-3 font-normal text-gray-700 ">{ description }</p>
            </div>
        </div>
    )
}
