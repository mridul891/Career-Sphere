import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

const Details = () => {
  const [date, setDate] = useState("");
  const location = useLocation();
  const { state } = location;
  useEffect(() => {


    // Convert the timestamp to a Date object
    const date = new Date(state.createdAt);

    // Format the date
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    setDate(formattedDate);
  }, []);
  return (
    <div className="  flex w-full justify-center items-center mt-[4rem]">
      <div className=" w-full  lg:w-[70vw] text-justify job-description">
        {date}
        <h1 className="text-3xl font-semibold mb-5">{state.title}</h1>

        <div>{parse(state.body.html)}</div>

        <div className="mt-6">
          <a href={state.apply} className="bg-blue-700 p-4 rounded-xl ">
            Apply Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
