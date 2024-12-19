const Experience = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-bold">Experience</h1>
      <div className="mt-2">
        <div>
          <input type="checkbox" name="0years" id="0years" />
          <label htmlFor="0years" className="ml-1">
            More than 0 Year
          </label>
        </div>
        <div>
          <input type="checkbox" name="1years" id="1years" className="bg-transparent border-2" />
          <label htmlFor="1years" className="ml-1">
            More than 1 Year
          </label>
        </div>
        <div>
          <input type="checkbox" name="2years" id="2years" />
          <label htmlFor="2years" className="ml-1">
            More than 2 Year
          </label>
        </div>
        <div>
          <input type="checkbox" name="3years" id="3years" />
          <label htmlFor="3years" className="ml-1">
            More than 3 Year
          </label>
        </div>
      </div>
    </div>
  );
};

export default Experience;
