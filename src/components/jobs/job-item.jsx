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
      className={`mb-  !w-full overflow-hidden 427   ${
        isOpen ? "h-[910px]" : "!h-full "
      }`}
    >
      <div className="mx-auto bg-background w-full h-full shadow-lg  overflow-hidden">
        <div className="px-3 py-2">
          <div className="flex w-full p-0  items- justify-around !gap-0 pb-3">
            <img
              src="assets/profile.svg"
              alt="Profile"
              className="border-[1px] border-secondary"
            />
            <div className="flex flex-col b">
              <div className="flex justify-between w-full ">
                <h2 className="font-bold w-full !text-nowrap  text-secondary textmd mb-1">
                  {item.name}
                </h2>
                <div className="text-primary">
                  <ThreeDotsVertical />
                </div>
              </div>
              <div className="w-full mb-2 bg-[white] rounded-full h-[3px] dark:bg-gray-700 mt-2">
                <div
                  className="bg-[linear-gradient(90deg,#B6D2D7 0%, #005354 100%)] h-[3px] rounded-full"
                  style={{
                    width: "65%",
                    background:
                      "linear-gradient(90deg, #B6D2D7 0%, #005354 100%)",
                  }}
                ></div>
              </div>
              <p className="text-primary text font-semibold">
                {item.profession}
              </p>
            </div>
          </div>
          <div className="text-md  border-border font-semibold whitespace-nowrap text-left">
            <div className="grid  grid-cols-3 text-center mb-4">
              {gridItems.map((gridItem, index) => (
                <div
                  key={index}
                  className={`relative  group border-y-[1px]  border-border !text-left w-full mx-auto ${
                    index % 3 !== 2 ? "" : ""
                  } ${index < 3 ? "" : ""} ${
                    index >= 9 ? "" : ""
                  } px-3 py-2  text-secondary`}
                >
                  <div
                    className={`${
                      index % 3 != 2 && " border-r-[1px] h-[3rem] border-border"
                    }`}
                  >
                    {gridItem.image && (
                      <div className="flex gap-2">
                        <img
                          src={gridItem.image}
                          alt="Flag"
                          className="mb-2 w-6 h-6"
                        />
                        <p className="font-semibold textmd">{gridItem.value}</p>
                      </div>
                    )}
                    {!gridItem.image && (
                      <p className="font-semibold ">{gridItem.value}</p>
                    )}
                    <p className="text-primary text-[12px] font-bold text-left">
                      {gridItem.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 pb-4">
          <button
            className="text-secondary text-center text-md w-full font-bold py-2 px-4 rounded"
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
