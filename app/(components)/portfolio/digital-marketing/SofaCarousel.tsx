"use client"

import sofaFile from "./sofa-files.json"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

interface ISofaImages {
    original: string;
    thumbnail: string;
}

interface SofaCarouselProps {
    slidesPerView?: number,
}


export default function sofaCarousel({ slidesPerView }: SofaCarouselProps) {
    const sofaImages: ISofaImages[] = sofaFile

    return (
        <Swiper
        slidesPerView={slidesPerView || 1}
        centeredSlides={true}
        spaceBetween={0}
        navigation={true}
        keyboard={true}
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        autoplay={{
            "delay": 3000, 
        }}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className=""
        loop={true}
        >
            {
            sofaImages.map((sofa, index) => {
                return (
                    <SwiperSlide key={`${index}-slide`}>
                        <Image
                        className="w-full h-[20rem] object-cover"
                        src={sofa.original}
                        alt={`${index}-sofa`}
                        width={500}
                        height={500}
                        />
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
    )
}