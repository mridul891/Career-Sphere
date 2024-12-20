import { useEffect, useState } from "react";
import JobsComponent from "./JobsComponent";

const Jobs = ({ data, Activefilter }) => {
  // const UpdateFilter = () =>{
  //    let UpdatedFilterArray = data.filter((prod)=>{
  //     let options = Activefilter.find((af)=>af.type === "jobType").value

  //     if(options.length === 0){
  //       return true
  //     }

  //     return options.include()
  //    })
  // }

  useEffect(() => {
    console.log(" filters from jobs ", Activefilter);
  }, [Activefilter]);

  return (
    <div className="">
      {data.map((job) => (
        <div key={job.id}>
          <JobsComponent job={job} />
        </div>
      ))}
    </div>
  );
};

export default Jobs;
