import { Apidata } from "../datas";
import { useEffect, useState } from "react";
import JobsComponent from "./JobsComponent";

const RemoteJob = () => {
  const [data, setData] = useState(Apidata);
  const activeFilters = [
    {
      type: "jobtype",
      value: ["Remote"],
    },
  ];

  const updateFilterProduct = () => {
    let updatedFilterProduct = data.filter((fp) => {
      let values = activeFilters.find((af) => af.type === "jobtype").value;
      if (values.length === 0) {
        return true;
      }
      return values.includes(fp.jobType);
    });
    setData(updatedFilterProduct);
  };

  useEffect(() => {
    updateFilterProduct();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      {data.map((job) => (
        <div key={job.id} className="">
          <JobsComponent job={job} />
        </div>
      ))}
    </div>
  );
};

export default RemoteJob;
