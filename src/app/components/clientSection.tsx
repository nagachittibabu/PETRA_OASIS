import Image from "next/image";

const clients=["/clients/client1.jpeg","/clients/client2.png","/clients/client3.png","/clients/client4.png","/clients/client5.jpeg","/clients/client1.jpeg","/clients/client1.jpeg","/clients/client1.jpeg","/clients/client1.jpeg","/clients/client1.jpeg","/clients/client1.jpeg","/clients/client1.jpeg","/clients/client1.jpeg","/clients/client1.jpeg" ]

const ClientSection = () => {
  return (
    <div className="w-full h-[300px] bg-white flex flex-col space-y-12 overflow-hidden justify-center items-center rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-[20px] xl:text-[38px] lg:text-[36px] md:text-[35px] sm:text-[30px] font-bold text-center">
        OUR CLIENTS
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-loop space-x-14 px-4  h-[150px]">
          {clients.map((ele, index) => (
            <div
              className="w-[80px] h-[60px] xl:w-[200px] xl:h-[140px] lg:w-[90px] lg:h-[120px] flex-shrink-0 relative"
              key={index}
            >
              <Image src={ele} alt={`client logo ${index}`} fill className="object-covder" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;