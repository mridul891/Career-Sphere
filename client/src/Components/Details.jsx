import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
    const [date , setDate ] = useState("")
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    console.log(state);


    // Convert the timestamp to a Date object
    const date = new Date(state.createdAt);

    // Format the date
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    setDate(formattedDate);
  }, []);
  return (
    <div>
      {state.slug}
      <br />
    {date}
    </div>
  );
};

export default Details;
