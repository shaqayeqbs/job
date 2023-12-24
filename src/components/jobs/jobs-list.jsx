import React, { useState } from "react";
import { jobsData } from "../../@core/data/jobs";
import JobItem from "./job-item";

function JobsList() {
  const [openItemId, setOpenItemId] = useState(null);

  const handleExpand = (id) => {
    setOpenItemId((prevOpenItemId) => (prevOpenItemId === id ? null : id));
  };

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[6px] h-full">
        {jobsData?.map((job) => (
          <div
            key={job.id}
            className={
              openItemId === job.id
                ? "row-span-2 !h-full !w-full"
                : "row-span-1 !h-full  !w-full"
            }
          >
            <JobItem
              item={job}
              onExpand={handleExpand}
              isOpen={openItemId === job.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsList;
