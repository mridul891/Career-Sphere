import { useEffect, useState } from "react";
import { FilterComponent } from "./Filter";
import Jobs from "./Jobs";
import { Apidata } from "../datas";

const Landing = () => {
  const [filter, setFilters] = useState([]);
  const [data, setData] = useState(Apidata);

  const handleDataFromChild = (newFilter) => {
    console.log(JSON.stringify(newFilter));
    setFilters(JSON.stringify(newFilter));
  };

  useEffect(()=>{
    console.log("new change")
  } , [filter])
  return (
    <div className="mt-10 flex gap-10">
      <FilterComponent onSendData={handleDataFromChild} />
      <Jobs data={data} Activefilter={filter} />
    </div>
  );
};

export default Landing;
