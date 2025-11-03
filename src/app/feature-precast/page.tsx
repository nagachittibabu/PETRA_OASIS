import Image from "next/image";
import Gallery from "../cards/cards/imageGallery";
import ProjectDetailCard from "../cards/cards/projectDetailsCard";
import LogoGallery from "../cards/cards/logoGallery";
let count = 0;
const Precast = () => {
  const images = [
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
    "/precast_images/1.webp",
  ];

  return (
    <section className=" section w-full h-full flex justify-center items-center  flex-col ">
      <div className="   w-[90%] h-[90%]  flex justify-center items-center space-y-10  flex-col  main_section">
        <div className="   w-[90%] h-[200px] text-center precast_building box_shadow">
          <h1 className=" heading text-[30px] xl:text-[50px] lg:text-[46px] md:text-[43px] sm:text-[38px]  font-bold text-blue-800">
            Precast Buildings System
          </h1>
          <h2 className="services text-[25px] font-medium text-blue-800">
            We are specialists In MEP Precast panel Manufacturing services.
          </h2>
        </div>
        <div className= " intro box_shadow  xl:text-[18px] xl:w-[90%] xl:h-[600px] w-[90%] h-[600px] lg:w-[90%] lg:h-[700px]   lg:p-[20px] md:w-[90%] md:h-[94%] md:p-[10px] sm:w-[90%] sm:h-[95%]  sm:p-[10px] flex justify-center  flex-col space-y-10 text-[18px] font-serif   ">
          <div className="font-serif  ">
            <p>
              <span className="font-bold text-blue-800">Introduction :</span>{" "}
              This method statement covers the site installation of the PVC
              Conduits in the floor slab & concrete walls.
            </p>
          </div>

          <div className="text-gray-500">
            <p>
              This procedure defines the method used to ensure that all conduits
              and associated accessories: bends, tees, couplers, reducers, and
              all accessories associated with the systems installed are correct
              and acceptable. Similarity to other activities.
            </p>
          </div>

          <div className="text-gray-500">
            <p>
              Combining architectural and structural precast concrete components
              can provide the entire building envelope. The system can take
              several forms, including precast columns and beams with panelized
              cladding or load-bearing precast walls and double-tee or
              hollow-core flooring. It provides a significant number of
              advantages.
            </p>
          </div>

          <div className="text-gray-500">
            <p>
              One-stop shopping secures much of the building's shell in one
              efficient contractual relationship. Designers find precast systems
              easier to design than masonry or other building materials as we
              have a strong engineering department with highly skilled staffs.
            </p>
          </div>

          <div className="text-gray-500">
            <p>
              The ability to begin fabrication while permitting and site work
              are completed allows precast concrete to begin erection as soon as
              foundations are complete. Precast components can be erected in
              severe conditions, maintaining tight schedules. With full precast
              building systems, fast erection allows the contractor to enclose
              the building quickly, giving other trades like MEP, Finishes etc.
              faster access to commence their works thereby substantially
              reducing the time frame of the project by involving parallel
              works. Precast product's inherent fire resistance eliminates the
              messy and time-consuming work of fireproofing a steel structure
              and then repairing it as other trades finish
            </p>
          </div>
        </div>
        <div className=" box_shadow xl:w-[90%] xl:h-[90%] xl:text-[16px] lg:w-[90%] lg:h-[90%] lg:p-[20px]    md:w-[90%] md:h-[94%] md:p-[10px]  sm:w-[90%] sm:h-[95%]  sm:p-[10px]      w-[90%] h-[95%]  flex justify-center  flex-col space-y-10 text-[16px]  ">
          <div>
            <h2 className="font-bold text-[25px] text-blue-900 ">
              Other key value propositions includes:
            </h2>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              Low Maintenance :
            </h3>
            <p className="text-gray-600">
              Precast concrete panels require less maintenance than other
              materials, typically only occasional recaulking, usually every
              seven to 10 years. As sealants improve, that timetable will
              lengthen. Incorporating the architectural design into the
              structure enlarges panel sizes, minimizing the number of joints.
              This significantly reduces the chance for water penetration that
              can weaken a structure and cause unsightly staining and mold
              problems.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              High Quality :
            </h3>
            <p className="text-gray-600">
              Our Quality procedures are complying the latest precast industry
              best practices and the production is conducted in controlled
              environments. The tight control ensures components are produced
              with uniform consistency, finish and size. This minimizes concerns
              over the building's final appearance and reduces site work
              required to achieve the needed outcomes.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              Effective Pricing :
            </h3>
            <p className="text-gray-600">
              Because of precast concrete's tightly controlled and shorter
              production process, costs can be more accurately estimated earlier
              in the process. Parallel effort by precast engineering ensures
              estimates remain stable, assuring the contractor, owner and design
              team that the budget is sound.
            </p>
            <p className="text-gray-600">
              Further the time saved during construction, reduction of manpower
              at site, and enabling parallel works of different trades ensures a
              efficient site execution there by reducing the overall
              construction costs of the contractor.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">Safety :</h3>
            <p className="text-gray-600">
              Plant casting keeps the site cleaner and eliminates trades from
              the construction zone, improving logistics and enhancing worker
              safety. The ability to provide a clean site is particularly vital
              on live localities and in dense urban areas, where adjacent
              businesses can maintain near-normal activities.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              Interior Design Flexibility :
            </h3>
            <p className="text-gray-600">
              Precast concrete systems help buildings adapt to changing client
              needs. Various super span pre-stressed precast products match
              typical composite-steel framing and minimize the need for interior
              columns required with cast-in-place systems. High Precast spans
              provides unique opportunities for challenging interior
              requirements. Precast also provides high floor-loading capability
              with little added cost.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              blue Design :
            </h3>
            <p className="text-gray-600">
              Precast concrete offers a number of environmental benefits. It
              requires fewer chemicals to keep it clean over its long lifetime,
              and it offers a high thermal mass. It can be produced locally and
              creates no job waste. Cement reducers such as fly ash and other
              admixtures also aid its environmental friendliness. And its high
              durability gives it a total service life that far outpaces designs
              using other building materials.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900 ">
              Tight Floor-To-Floor Heights :
            </h3>
            <p className="text-gray-600">
              Adaptability for composite construction allows precast system to
              work along with various innovative construction systems to reduce
              the use of beams and other structural components thereby reducing
              the clear height. This can provide additional built up area in the
              same plot limits and increase the ROI of the building.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              All-In-One Components :
            </h3>
            <p className="text-gray-600">
              Total precast concrete systems allow the architectural panels to
              serve structural functions, limiting the need to incorporate
              multiple materials and trades.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              Lateral Design Flexibility :
            </h3>
            <p className="text-gray-600">
              Combining architecture and structure provides efficiencies in many
              buildings' lateral support systems. External elements, typically
              cladding on steel or concrete-framing systems, can become
              laterally stiff and resist wind and earthquake forces. Parallel
              efforts by the precast engineer can provide the structural
              engineer with specific input ahead of final construction document
              preparation, limiting shop-drawing review effort and redesign.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              Comprehensive Drawings :
            </h3>
            <p className="text-gray-600">
              A total precast concrete system provides one-stop shopping for the
              building envelope. Having one source design and supply the entire
              system produces a better coordinated set of drawings that allows
              construction to proceed more efficiently. It eliminates the added
              effort needed to coordinate various trades when using mixed
              systems controlled by different suppliers.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[20px] text-blue-900">
              Low-Cost Option :
            </h3>
            <p className="text-gray-600">
              This combination of benefits creates cost savings that begin with
              the design process and last throughout the life of the building.
              When all of these hidden and long-term costs are included, precast
              concrete offers the best value and the highest return on
              investment.
            </p>
          </div>
        </div>
        <Gallery GalleryImages={images} />

        <ProjectDetailCard
          projectType="Ongoing project "
          projectTitle="Baniyas North Development-Phase 3A & 3B – Abu Dhabi."
          clientName="Aldar Properties L.L.C."
          consultantName="Motta Macdonald."
          mainConstructor="China State Construction Engineering Corporation Middle East L.L.C."
          companyLogo="/precast_images/1.webp"
          projectImages={images}
          
        />
        <LogoGallery LogoImages={images} />
        <LogoGallery LogoImages={images} />
        <Gallery GalleryImages={images} />
        <ProjectDetailCard
          projectType="Ongoing project "
          projectTitle="BThe sustainable City Abu Dhabi, Yas Island.."
          clientName="Aldar Properties L.L.C and Diamond Developers."
          consultantName=""
          mainConstructor="Jeet MEP."
          companyLogo="/precast_images/1.webp"
          projectImages={images}
        />
        
        <ProjectDetailCard
          projectType="Ongoing project "
          projectTitle="The sustainable City Abu Dhabi, Yas Island.."
          clientName="Aldar Properties L.L.C and Diamond Developers."
          consultantName=""
          mainConstructor="Jeet MEP."
          companyLogo="/precast_images/1.webp"
          projectImages={[]}
        />
        <ProjectDetailCard
          projectType="completed projects"
          projectTitle="BThe sustainable City Abu Dhabi, Yas Island.."
          clientName="Aldar Properties L.L.C and Diamond Developers."
          consultantName=""
          mainConstructor="Jeet MEP."
          companyLogo="/precast_images/1.webp"
          projectImages={[]}
        />
        <Gallery GalleryImages={images} />
        <LogoGallery LogoImages={images} />
        <ProjectDetailCard
          projectType="Completed Projects: "
          projectTitle="142(TGC-2135-RH/AM-P6)"
          clientName="HK Advance EMW L.L.C"
          consultantName="HK Advance EMW L.L.C"
          mainConstructor="HK Advance EMW L.L.C"
          companyLogo="/precast_images/1.webp"
          projectImages={[]}
        />
      </div>
    </section>
  );
};
export default Precast;
