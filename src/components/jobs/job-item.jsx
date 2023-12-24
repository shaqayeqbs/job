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
    <div
      className={`!w-full overflow-hidden  ${
        isOpen ? "h-[910px]" : "!h-full "
      }`}
    >
      <div className="mx-auto bg-background w-full h-full shadow-lg  overflow-hidden">
        <div className="px-[16px] pt-[16px] w-full ">
          <div className=" flex justify-between  items-center !gap-0   pb-[13px]">
            <div className="xl:float-left">
              <img
                src="assets/profile.svg"
                alt="Profile"
                className="border-[1px] ml-2  border-secondary"
              />
            </div>
            <div className="w-[calc(100%-73px)] xl:!ml-[-36px]">
              <div className="flex justify-between w-full ">
                <h2 className="font-bold w-full !text-nowrap  text-secondary textmd mb-1">
                  {item.name}
                </h2>
                <div className="text-primary">
                  <ThreeDotsVertical />
                </div>
              </div>
              <div className="!w-full mb-2 bg-[white] rounded-full h-[3px] dark:bg-gray-700 mt-2">
                <div
                  className=" h-[3px] rounded-full"
                  style={{
                    width: "65%",
                    background:
                      "linear-gradient(90deg, #B6D2D7 0%, #005354 100%)",
                  }}
                ></div>
              </div>
              <p className="text-primary w-[80%] text-[10px] font-semibold">
                {item.profession}
              </p>
            </div>
          </div>
          <div className="text-md  border-border font-semibold whitespace-nowrap text-left">
            <div className="grid  grid-cols-3 text-center mb-4">
              {gridItems.map((gridItem, index) => (
                <div
                  key={index}
                  className={`relative h-[55px] group !border-y-[.5px]  border-border !text-left w-full mx-auto ${
                    index % 3 !== 2 ? "" : ""
                  } ${index < 3 ? "" : ""} ${
                    index >= 9 ? "" : ""
                  } px-3 py-1  text-secondary`}
                >
                  <div>
                    {gridItem.image && (
                      <div className="flex gap-2">
                        <img src={gridItem.image} alt="Flag" className="mb-1" />
                        <p className="font-semibold textmd">{gridItem.value}</p>
                      </div>
                    )}
                    {!gridItem.image && (
                      <p className="font-semibold ">{gridItem.value}</p>
                    )}
                    <p className="text-primary !text-[12px] font-bold text-left">
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
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 pb-4">
          <button
            className="text-secondary text-center text-md w-full font-bold  px-4 rounded"
            onClick={toggleExpand}
          >
            Know More
          </button>
        </div>
        {isOpen && (
          <div className="mt-[-3px] bg-background">
            <div className="w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4 font-bold textmd !h-[560px] overflow-hidden">
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
