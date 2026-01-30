"use client"

import "react-image-gallery/styles/css/image-gallery.css";
import sofaFile from "./sofa-files.json"
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

const sofaImages: ReactImageGalleryItem[] = sofaFile

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
        slideDuration={1500}
        swipingTransitionDuration={100}
        additionalClass="px-[5rem] w-full h-[38rem] object-cover"
        />
    );
}
 
export default SofaCarousel;