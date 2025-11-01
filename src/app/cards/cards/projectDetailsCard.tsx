import Image from "next/image";

interface ProjectDetailCardProps {
  projectType: string;
  projectTitle: string;
  clientName: string;
  consultantName: string;
  mainConstructor: string;
  companyLogo: string;
  projectImages: string[];

}

const ProjectDetailCard = ({
  projectType ="",
  projectTitle="",
  clientName="",
  consultantName="",
  mainConstructor="",
  companyLogo="",
  projectImages = [],
  
}: ProjectDetailCardProps) => {
  return (
    <div className="grid gap-4 w-full  sm:w-[90%] main_section">
      <div className="bg-gray-50 p-8 h-[99%]  ">
        <div className="max-w-4xl mx-auto shadow-lg  bg-white border border-gray-200 ">
          {/* Header Section */}
          <div className="bg-blue-900 text-white p-4 sm:p-6 ">
            <h2 className="text-2xl sm:text-3xl font-bold ">{projectType}</h2>
          </div>

          {/* Details Section */}
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {/* Project Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-4 sm:px-6">
              <div className="font-bold text-custom-orange md:col-span-1 ">
                Project:
              </div>
              <div className="md:col-span-2">{projectTitle}</div>
            </div>

            {/* Client Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-4 sm:px-6">
              <div className="font-bold text-custom-orange md:col-span-1">
                Client:
              </div>
              <div className="md:col-span-2">{clientName}</div>
            </div>

            {/* Consultant Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-4 sm:px-6">
              <div className="font-bold text-custom-orange md:col-span-1">
                Consultant:
              </div>
              <div className="md:col-span-2">{consultantName}</div>
            </div>

            {/* Main Contractor Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-4 sm:px-6">
              <div className="font-bold text-custom-orange md:col-span-1">
                Main Contractor:
              </div>
              <div className="md:col-span-2">{mainConstructor}</div>
            </div>
            <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 px-4 sm:px-6">
              <div className=" relative col-span-1 sm:col-span-2 md:col-span-3 row-span-16 ">
                <Image
                  src={companyLogo}
                  fill
                  className="object-cover rounded-lg"
                  alt="Company Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* views of projects */}
      <div className=" Photos  grid  grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2   gap-4 ">
        {projectImages.map((imgee, i) => {
          return (
            <div key={i} >
              <Image src={imgee} width={300} height={250} alt=""  className="photos_inside box_shadow "/>
            </div>
          );
        })}
      </div>
      {/* company logo */}
 
    </div>
  );
};
export default ProjectDetailCard;
