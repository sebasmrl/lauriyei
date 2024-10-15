import Image from 'next/image'

interface Props{
    name: string;
    position:string;
    imgUrl:string;
}

export const EmployeeCard = ({ name, position, imgUrl}:Props) => {
    return (
        <div className="flex flex-col items-center px-4 py-8  w-[16rem] rounded-lg  shadow overflow-hidden">
            <Image className="w-36 h-36 mb-3 rounded-full shadow-lg" src={imgUrl} alt="Foto de empleado" width={200} height={200} />
            <h5 className="mb-1 text-2xl font-semibold text-cyan-900">{name}</h5>
            <span className="text-lg text-gray-500">{position}</span>
        </div>
    )
}
