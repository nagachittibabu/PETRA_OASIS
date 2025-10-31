import Image from "next/image";

interface logoGallery{
    LogoImages:string[];
}
const LogoGallery=({LogoImages}:logoGallery)=>{
    return(
             <div className="logo_images   box_shadow rounded-xl w-[100%] h-full grid  grid-cols-4 xl:grid-cols-2 xl:gap-4 lg:grid-cols-2 lg:gap-4 md:grid-cols-1 md:gap-4 sm:grid-cols-1 sm:gap-4  ">
        {LogoImages.map((imgee, i) => {
          return (
            <div key={i} className="h-[250px] relative ">
              <Image
                src={imgee}
                alt=""
                fill
                objectFit="cover" 
                
                className="rounded-xl rounded-lg rounded-md rounded-sm"
              />
            </div>
          );
        })}
      </div>
    )
}
export default LogoGallery;