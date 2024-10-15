import Image from "next/image"

interface Props{
    imgUrl:string
}

export const ClientCard = ({ imgUrl}:Props) => {
  return (
    

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
    <div className=" overflow-hidden">
        <Image className="hover:scale-110 rounded-t-lg transition duration-500 cursor-pointer " src={imgUrl} alt="" width={300} height={300} style={{height:'100%', width:'100%'}} />
    </div>
    
</div>

  )
}
