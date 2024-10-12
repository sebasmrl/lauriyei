
interface Props{
  title:string;
  description:string;
  icon: React.ReactNode
}

export const MoralAndEthicalValueCard = ({title, description, icon}:Props) => {
  return (
    <div className="flex flex-col  p-7 w-[300px]  rounded  shadow">
      <div className="flex items-center gap-3 text-cyan-600">
        { icon }
        <h3 className="text-xl font-semibold text-cyan-600">{title}</h3>
      </div>
      <p className="text-lg mt-1">{ description} </p>
    </div>
  )
}
