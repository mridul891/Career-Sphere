import { useEffect, useState } from "react";
import JobsComponent from "./JobsComponent";

const Jobs = ({ data, Activefilter }) => {
  const [filteredProduct, setFilteredProduct] = useState(data);
  const newarr = JSON.parse(Activefilter);

  const updateFilterProduct = () => {
    let updatedFilterProduct = data.filter((fp) => {
      if ( newarr === null ){
        return true
      }
      if (newarr != null) {
        let values = newarr.find((af) => af.type == "experience").value;
        if(values.length === 0) {
          return true
        }
        return values.includes(fp.experience);
      }
    }).filter((fp) => {
      if ( newarr === null ){
        return true
      }
      if (newarr != null) {
        let values = newarr.find((af) => af.type == "jobtype").value;
        if(values.length === 0) {
          return true
        }
        return values.includes(fp.jobType);
      }
    }).filter((fp) => {
      if ( newarr === null ){
        return true
      }
      if (newarr != null) {
        let values = newarr.find((af) => af.type == "domain").value;
        if(values.length === 0) {
          return true
        }
        return values.includes(fp.domain);
      }
    })

    setFilteredProduct(updatedFilterProduct);
  };

  useEffect(() => {
    updateFilterProduct();
  }, [Activefilter]);
  return (
    <div className="">
      {filteredProduct.map((job) => (
        <div key={job.id} className="">
          <JobsComponent job={job} />
        </div>
      ))}
    </div>
  );
};

export default Jobs;
