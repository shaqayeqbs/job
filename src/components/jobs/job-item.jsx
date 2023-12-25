import React from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";
function JobItem({ item, onExpand, isOpen }) {
  const toggleExpand = () => {
    onExpand(item.id);
  };

  const gridItems = [
    { label: "COUNTRY", value: item.country, image: "assets/swiss.svg" },
    { label: "COOPERATION TYPE", value: item.cooprationType },
    { label: "CATEGORY", value: item.category },
    { label: "CITY", value: item.city, image: "assets/swiss.svg" },
    { label: "GENDER", value: item.gender },
    { label: "MIN EXPERIENCE", value: item.minExperience },
    {
      label: "NATIVE LANGUAGE",
      value: item.nativeLanguage,
      image: "assets/swiss.svg",
    },
    { label: "MINIMUM SALARY", value: item.minimumSalary },
    { label: "STARTING HOURS", value: item.startingHours },
    { label: "CONTRACT TYPE", value: item.contractType },
    { label: "MAXIMUM SALARY", value: item.maximumSalary },
    { label: "ENDING HOURS", value: item.endingHours },
  ];

  return (
    <div className={`!w-full overflow-hidden  ${isOpen ? "" : "!h-full "}`}>
      <div
        className={`${
          isOpen ? "!h-[860px]" : "h-[427px] "
        } mx-auto bg-background w-[475px] shadow-lg  overflow-hidden`}
      >
        <div className="px-[16px] pt-[15px] w-full ">
          <div className=" flex justify-between  items-center !gap-0   pb-[11px]">
            <div className="xl:float-left">
              <img
                src="assets/profile.svg"
                alt="Profile"
                className="border-[1px] ml-2  border-secondary"
              />
            </div>
            <div className="w-[calc(100%-74px)] xl:!ml-[-36px]">
              <div className="flex justify-between w-full ">
                <h2 className="font-bold w-full !text-nowrap  text-secondary textmd">
                  {item.name}
                </h2>
                <div className="text-primary  !mr-[-6px]">
                  <ThreeDotsVertical />
                </div>
              </div>
              <div className="!w-full mb-2 bg-[white] rounded-tr-[1.5px] rounded-tl-[2.5px] h-[3px] dark:bg-gray-700 mt-2">
                <div
                  className="h-[3px] rounded-tr-[1.5px] rounded-tl-[2.5px]"
                  style={{
                    width: "65%",
                    background:
                      "linear-gradient(90deg, #B6D2D7 0%, #005354 100%)",
                  }}
                ></div>
              </div>
              <p className="text-primary w-[88%] text-[10px] font-semibold">
                {item.profession}
              </p>
            </div>
          </div>
          <div className="text-md  border-border font-semibold whitespace-nowrap text-left ">
            <div className="grid  grid-cols-3 text-center ">
              {gridItems.map((gridItem, index) => (
                <div key={index}>
                  <hr className="border-y-1 w-full border-border" />
                  <div
                    className={`relative w-[146px] !h-[55px] pt-[6px] group !border-y-[.5px]   !text-left mx-auto ${
                      index % 3 !== 2 ? "" : ""
                    } ${index < 3 ? "" : ""} ${
                      index >= 9 ? "" : ""
                    } px-3   text-secondary`}
                  >
                    <div className=" ">
                      {gridItem.image && (
                        <div className="flex items-center space-x-2">
                          <img src={gridItem.image} alt="Flag" className="" />
                          <p className="font-semibold textmd">
                            {gridItem.value}
                          </p>
                        </div>
                      )}
                      {!gridItem.image && (
                        <p className="font-semibold textmd flex items-center w-full  ">
                          {gridItem.value}
                        </p>
                      )}
                      <p className="text-primary  font-[600]  inline-bloc !text-[12px]   text-left">
                        {gridItem.label}
                      </p>
                      <hr
                        className={`${
                          index % 3 !== 2 &&
                          "absolute right-0 top-3 bottom-3 border-l-[.5px]  items-center !h-[28px]  my-auto border-border"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" w-full px-[13px] textmd py-[8px] border-y-[.5px] border-border flex-1">
              <div className="flex w-full space-x-[13px]  text-secondary">
                <div className="flex items-center space-x-[8px]">
                  {" "}
                  <img src="assets/swiss.svg" alt="Flag" className="" />
                  <p className="font-semibold textmd">Montenegro</p>
                </div>
                <div className="flex items-center space-x-2">
                  {" "}
                  <img src="assets/swiss.svg" alt="Flag" className="" />
                  <p className="font-semibold textmd">Montenegro</p>
                </div>{" "}
                <div className="flex items-center space-x-2">
                  {" "}
                  <img src="assets/swiss.svg" alt="Flag" className="" />
                  <p className="font-semibold textmd">Montenegro</p>
                </div>{" "}
              </div>
              <div className="text-primary font-semibold ">REQUIRED SKILLS</div>
            </div>
          </div>
        </div>
        <div className="px-6 my-[12px] flex w-full !items-center  flex-col ">
          <button
            className="text-secondary  flex justify-center  items-center  text-center text-md w-full   px-4 rounded"
            onClick={toggleExpand}
          >
            Know More
          </button>
        </div>
        {isOpen && (
          <div className="bg-background ">
            <div className="w-full  mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4 font-bold textmd  overflow-hidden">
                <h2 className="text-secondary">United States of America</h2>
                <p className="text-primary">COMPANY ADDRESS</p>
                <p className=" text-secondary my-3 text-md">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobItem;
