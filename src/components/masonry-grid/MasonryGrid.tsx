import Image from 'next/image'

export const MasonryGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 self-center my-8 movil:px-2 md:px-0 tablet:mx-[15vw]">
            <div className="grid gap-4 ">
                <div className='overflow-hidden rounded-lg cursor-pointer'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-down hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/casa-quinta/img-2.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image className=" max-w-full rounded-lg animate-c-fade-in-down hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/clubes/img-1.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-down hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/clubes/img-3.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-up hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/conjuntos/img-1.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-up hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/conjuntos/img-3.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-up hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/casa-quinta/jacuzzis/img-2.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-down hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/casa-quinta/jacuzzis/img-1.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-down hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/casa-quinta/img-3.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-down hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/conjuntos/img-4.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-up hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/clubes/img-2.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-up hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/casa-quinta/img-6.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image className="h-auto max-w-full rounded-lg animate-c-fade-in-up hover:scale-110 transition-all cursor-pointer" src="/assets/clientes/casa-quinta/img-4.jpg" alt="" width={200} height={250} style={{ height:'auto', width:'100%'}}/>
                </div>
            </div>
        </div>
    )
}
