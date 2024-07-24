import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

interface CarouselProps {
  images: string[];
}
export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentindex] = useState(0);
  //   const nextSlide = () => {
  //     setCurrentindex((prevIndex) => (prevIndex + 1) % images.length);
  //   };
  //   const prevSlide = () => {};

  return (
    <div className="relative w-full">
      <Image
        alt={`image ${0}`}
        src={images[0]}
        // objectFit="cover"
        layout="fill"
        className="blur-xl"
      />
      <div className="relative max-w-md flex-shrink-0 h-96 m-auto">
        <Image
          alt={`image ${0}`}
          src={images[0]}
          //   objectFit="cover"
          layout="fill"
        />
      </div>
      <button
        // onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
      >
        <IoIosArrowDropleft size={40} className="text-zinc-300" />
      </button>
      <button
        // onClick={prevSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
      >
        <IoIosArrowDropright size={40} className="text-zinc-300" />
      </button>
    </div>
  );
}
