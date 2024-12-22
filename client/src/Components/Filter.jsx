import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";

export function FilterComponent({ onSendData }) {
  const [isOpen, setIsOpen] = useState(false);

  const filterProducts = [
    {
      id: "jobtype",
      name: "Job Type",
      options: [
        { value: "Full Time", label: "Full Time" },
        { value: "Internship", label: "Internship" },
        { value: "Remote", label: "Remote" },
      ],
    },
    {
      id: "experience",
      name: "Experience",
      options: [
        { value: "0", label: "Freshers" },
        { value: "1", label: "1 Year " },
        { value: "2", label: "2 Year" },
        { value: "3", label: "3 Year" },
        { value: "4", label: "4 Year" },

      ],
    },
    {
      id: "domain",
      name: "Domain",
      options: [
        { value: "Software Development", label: "Software Development" },
        { value: "Frontend Development", label: "Frontend Development" },
        { value: "Backend Development", label: "Backend Development" },
        { value: "Full Stack Development", label: "Full Stack Development" },
      ],
    },
  ];

  const [activeFilters, setActiveFilters] = useState([
    { type: "experience", value: [] },
    { type: "domain", value: [] },
    { type: "jobtype", value: [] },
  ]);
    
  const handleChange = (e) => {
    if (e.target.checked) {
      activeFilters.map((elem) => {
        if (elem.type === e.target.id) {
          elem.value = [...elem.value, e.target.value];
        }
      });
    } else {
      activeFilters.map((elem) => {
        if (elem.type === e.target.id) {
          elem.value = elem.value.filter((x) => x != e.target.value);
        }
      });
    }
    onSendData(activeFilters);
  };

  return (
    <>
      {/* Toggle Button for Mobile View */}
      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50 lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        Filters
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)} // Clicking on overlay closes the drawer
        ></div>
      )}

      {/* Filter Card */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-black text-white z-50 p-5 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } lg:relative lg:translate-y-0 lg:w-[20rem]`}
      >
        <Card className="w-full bg-black text-white lg:w-[20vw] ">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">Filters</span>
                {/* Close Button */}
                <button
                  className="text-xl font-semibold text-red-500 cursor-pointer lg:hidden"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filterProducts.map((elem) => (
              <div key={elem.id} className="mt-5">
                <h1 className="text-xl font-semibold">{elem.name}</h1>
                <ul>
                  {elem.options.map((option, index) => (
                    <div key={index} className="text-lg">
                      <input
                        type="checkbox"
                        name={option.label}
                        id={elem.id}
                        onChange={handleChange}
                        value={option.value}
                      />
                      <label htmlFor={option.label} className="ml-3">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
