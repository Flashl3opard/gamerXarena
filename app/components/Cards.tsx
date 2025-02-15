import Image from "next/image";
import type { FC } from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  imageAlt: string;
}

const Card: FC<CardProps> = ({ imageUrl, title, imageAlt }) => {
  return (
    <div className="relative w-64 h-96 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
