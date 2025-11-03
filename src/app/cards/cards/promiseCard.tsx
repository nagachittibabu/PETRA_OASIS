import React from "react";
import Image from "next/image";
import {
  Truck,
  Clock,
  Shield,
  Award,
  Users,
  DollarSign,
} from "lucide-react";

interface PromiseCardProps {
  imageurl: string;
  title: string;
  description: string;
  iconName: "Truck" | "Clock" | "Shield" | "Award" | "Users" | "DollarSign";
}

const getIconComponent = (name: string) => {
  switch (name) {
    case "Truck":
      return Truck;
    case "Clock":
      return Clock;
    case "Shield":
      return Shield;
    case "Award":
      return Award;
    case "Users":
      return Users;
    case "DollarSign":
      return DollarSign;
    default:
      return Award;
  }
};

const PromiseCard: React.FC<PromiseCardProps> = ({
  imageurl,
  title,
  description,
  iconName,
}) => {
  const IconComponent = getIconComponent(iconName);

  return (
    <div
      className="w-full h-full max-w-[360px] bg-white rounded-xl shadow-xl flex flex-col items-center text-center p-6 sm:p-8 
        transform transition duration-500 hover:translate-y-[-8px] hover:shadow-2xl">
      <div className="p-4 rounded-full bg-blue-500 text-white shadow-xl -mt-12 mb-4 ring-4 ring-white">
        <IconComponent className="w-8 h-8" />
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3 mt-4">{title}</h2>

      <p className="text-base text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="w-full aspect-[2/1] relative rounded-md overflow-hidden mt-6">
        <Image
          src={imageurl}
          alt={`Image for ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover opacity-70 hover:opacity-100 transition duration-300"
        />
      </div>
    </div>
  );
};

export default PromiseCard;
