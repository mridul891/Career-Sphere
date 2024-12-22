import { useNavigate } from "react-router-dom";

const JobsComponent = ({ job }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/job/${job.slug}`, {
      state: job,
    });
  };
  return (
    <div
      className="border-b cursor-pointer border-gray-500 w-full lg:w-[60vw] mt-2 p-3  flex flex-col md:flex-row flex-1 items-center justify-start overflow-hidden"
      onClick={handleClick}
    >
      {/* image */}
      <div className=" md:block w-[15rem] lg:w-[20rem] h-[10rem] overflow-hidden mr-3">
        <img src={job.companyImage.url} alt="" className="" />
      </div>
      {/* information */}
      <div className="flex flex-col gap-2 mt-2">
        <div>
          <h1 className="text-2xl font-semibold">{job.title}</h1>
        </div>
        <div className="flex gap-10 text-sm items-center">
          <div>
            <p className="mb-1">Job Type</p>
            <p className="bg-gray-800 p-2">{job.jobType} </p>
          </div>
          <div>
            <p className="mb-1">Experience</p>
            <p className="bg-gray-800 p-2">{job.experience} years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsComponent;
