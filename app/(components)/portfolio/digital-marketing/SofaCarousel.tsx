"use client"

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

const sofaImages: ReactImageGalleryItem[] = [
    {
        original: "/media/sofas/sofa-2.png",
        thumbnail: "/media/sofas/sofa-2.png",
        thumbnailClass: "w-full h-full object-fill"
    },
    {
        original: "/media/sofas/sofa-3.png",
        thumbnail: "/media/sofas/sofa-3.png",
        thumbnailClass: "w-full h-full object-cover"
    },
    {
        original: "/media/sofas/sofa-4.png",
        thumbnail: "/media/sofas/sofa-4.png",
        thumbnailClass: "w-full h-full object-cover"
    },
    {
        original: "/media/sofas/sofa-5.png",
        thumbnail: "/media/sofas/sofa-5.png",
        thumbnailClass: "w-full h-full object-cover"
    }
]

const SofaCarousel = () => {
    return (
        <ImageGallery
        items={sofaImages}
        showThumbnails={true}
        showFullscreenButton={false}
        showPlayButton={false}
        infinite={true}
        autoPlay={true}
        showBullets={true}
        slideDuration={2000}
        additionalClass="px-[5rem] h-[38rem]"
        />
    );
}
 
export default SofaCarousel;