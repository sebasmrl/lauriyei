'use client';
import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { SlideData } from '@/staticdata';
import Image from 'next/image';

interface Props{
    slideData:SlideData[]
}

export const Slider = ({slideData}:Props) => {
    

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slideData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slideData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    //Each 4 seconds change image
    useEffect(() => {
      const idInterval= setInterval(() => {
            const isLastSlide = currentIndex === slideData.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }, 4000);
    return ()=>{
        clearInterval(idInterval);
    }
    }, [currentIndex, slideData])

    
    
    

    return (
        <div className=' movil:px-2 md:px-16 movil:h-slide-movil sm:h-slide w-full m-auto relative group'>
            {/* <div
                style={{ backgroundImage: `url(${slideData[currentIndex].url})` }}
                className='w-full h-full rounded bg-center bg-cover duration-500'
            ></div> */}
            <Image className="w-full h-full rounded object-center object-cover duration-500 transition-all" src={slideData[currentIndex].url} alt={'slider image'} width={600} height={500} priority={true} />
            <div className='flex justify-between w-full movil:-translate-y-44 md:-translate-y-80 movil:px-2 md:px-6'>
                {/* Left Arrow */}
                <div className=' text-2xl rounded-full  p-2 hover:bg-cyan-500 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className=' text-2xl rounded-full p-2 bg-black/20 hover:bg-cyan-500 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
            
            <div className='flex top-4 justify-center -translate-y-20'>
                {slideData.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled className={slideIndex == currentIndex? 'text-white':' text-cyan-500/40'} />
                    </div>
                ))}
            </div>
        </div>
    );
}
