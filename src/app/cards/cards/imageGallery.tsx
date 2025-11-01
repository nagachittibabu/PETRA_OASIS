import Image from "next/image";

interface GalleryProps {
  GalleryImages: string[];
}
const Gallery = ({ GalleryImages }: GalleryProps) => {
  return (
    <div className="Gallery_images box_shadow rounded-xl w-[95%]  grid grid-cols-4 xl:grid-cols-4 xl:gap-4 lg:grid-cols-4  lg:gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-2">
      {GalleryImages.map((imgee, i) => {
        const index = i + 1; // Item number (1, 2, 3...)
        let extraClasses = "";
        let height = "200px"; // Default height

        // Every 10 items pattern (1–10, 11–20, 21–30...)
        const patternBase = Math.floor((index - 1) / 10) * 10;

        // Condition for 1st, 11th, 21st... item
        if (index === 1 + patternBase) {
          extraClasses =
            // Explicit Column Spans
            " col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 sm:col-span-5 " +
            // Explicit Row Spans (e.g., span 1 row across all breakpoints)
            " row-span-1 md:row-span-1 lg:row-span-1 xl:row-span-1  ";
        }

        // Condition for 3rd, 13th, 23rd... item
        if (index === 3 + patternBase) {
          extraClasses =
            // Explicit Row Spans (spans 2 rows across all breakpoints)
            "   row-span-2 md:row-span-2 lg:row-span-2 xl:row-span-2 " +
            // Explicit Column Spans (e.g., span 1 column across all breakpoints)
            " col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 ";

          height = "410px"; // Adjust height to fit row-span-2
        }

        return (
          // Apply dynamic height (h-[...]) and extraClasses
          <div key={i} className={`h-[${height}] relative ${extraClasses}`}>
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









































































    // <div className="border rounded-xl w-[100%] h-full grid  grid-cols-4 xl:grid-cols-4   xl:gap-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-4 sm:grid-cols-1 sm:gap-4  ">
    //   {GalleryImages.map((imgee, i) => {

    //     return (
    //       <div key={i} className="h-[600px] relative ">

    //         <Image
    //           src={imgee}
    //           alt=""
    //           fill
    //           objectFit="fill"
    //           className="rounded-xl rounded-lg rounded-md rounded-sm" />
    //       </div>
    //     );
    //   })}
    // </div>

    //     <section className="xl:w-[100%] xl:h-full lg:w-[99%] lg:h-full md:w-[99%]  md:h-[99%] sm:w-full sm:h-[95%]    w-full flex justify-center items-center flex-col py-6 gap-3">
    //   <div
    //     className="w-full  md:h-[97%] s sm:h-[9%]   w-full  grid gap-3"
    //     style={{

    //       gridTemplateColumns: " repeat( 4, 1fr) ",
    //       gridAutoRows: "200px",
    //     }}
    //   >
    //     {GalleryImages.map((imgee, i) => {
    //       const index = i + 2; // because array index starts from 0
    //       let extraClasses = "";
    //       let height = "200px";

    //       // every 10 items pattern (1–10, 11–20, 21–30...)
    //       const patternBase = Math.floor((index - 1) / 10) * 10;

    //       if (index === 1 + patternBase ) extraClasses = "   xl:col-span-1  lg:col-span-2  md:col-span-2  col-span-2   "; // 1, 11, 21...
    //       if (index === 3 + patternBase) {
    //         extraClasses = "xl:row-span-2 x lg:row-span-2  md:row-span-2  row-span-2   ";
    //         height = "410px"; // 3, 13, 23...
    //       }

    //       return (
    //         <div
    //           key={i}
    //           className={`relative overflow-hidden rounded-lg shadow-md md:w-[99%] ${extraClasses}`}
    //           style={{ height }}
    //         >
    //           <Image
    //             src={imgee}
    //             alt={`image-${index}`}
    //             fill
    //             className="object-fit object-center transition-transform duration-300 hover:scale-105"
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </section>
  );
};
export default Gallery;
