import Image from "next/image";

const clients = Array.from({ length: 1 }, () =>
  Array.from({ length: 36 }, (_, i) => `/clients/client${i + 1}.png`)
).flat();

const ClientSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 flex flex-col space-y-10 overflow-hidden justify-center items-center rounded-xl shadow-lg border border-gray-200 py-12 ">
      
      <h1 className="text-[22px] xl:text-[38px] lg:text-[36px] md:text-[32px] sm:text-[28px] font-extrabold text-center text-gray-800 tracking-wide relative">
        OUR CLIENTS
        <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-blue-600 rounded-full transform -translate-x-1/2"></span>
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-loop space-x-14 px-6 h-[50px] xl:h-[140px] lg:h-[140px] md:h-[140px] sm:h-[50px]">
          {clients.map((ele, index) => (
            <div
              key={index}
              className="w-[80px] h-[60px] xl:w-[180px] xl:h-[120px] lg:w-[140px] lg:h-[100px] md:w-[120px] md:h-[90px] sm:w-[100px] sm:h-[80px] flex-shrink-0 relative transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-orange-200 rounded-lg bg-white"
            >
              <Image
                src={ele}
                alt={`client logo ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;