import { useEffect, useState } from "react";
import JobsComponent from "./JobsComponent";
import { parse } from "postcss";

const Jobs = ({ data, Activefilter }) => {
  // {
  //   id: "cm4wo16sf190d07pm799ef84w",
  //   title: "Sourcefit is hiring for Front-End Developer | Remote",
  //   slug: "sourcefit-is-hiring-for-front-end-developer-or-remote-frontend-development",
  //   companyImage: {
  //     url: "https://ap-south-1.graphassets.com/clyfgge6609ki06o201991bwc/clzdrojk10d5t07pgyixim2mj",
  //   },
  //   body: {
  //     html: "\u003cp\u003e\u003cstrong\u003ePosition Summary\u003c/strong\u003e\u003c/p\u003e\u003cp\u003eWe are seeking a talented and detail-oriented \u003cstrong\u003eFront-End Developer\u003c/strong\u003e to join our team. The ideal candidate will be responsible for creating responsive and user-friendly interfaces for our web applications. With strong skills in HTML, CSS, and JavaScript, as well as experience in Laravel and Vue.js frameworks, you will play a pivotal role in delivering seamless and engaging user experiences. A basic understanding of PHP and UI/UX design principles will be beneficial in this role.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eJob Details\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eFront-End Developer\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003e\u003cem\u003eWork from Home\u003c/em\u003e\u003c/p\u003e\u003cp\u003eSchedule: TBD\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eResponsibilities\u003c/strong\u003e\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cdiv\u003eDevelop, maintain, and improve the front-end components of web applications using HTML, CSS, and JavaScript.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eCollaborate with back-end developers to integrate user-facing features with server-side logic, leveraging basic PHP skills and Laravel frameworks.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eBuild and maintain reusable code and libraries for future use.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eImplement and optimize Vue.js components and ensure their seamless integration into web applications.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eManage asynchronous HTTP requests to enhance web application performance and responsiveness.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eTranslate UI/UX design wireframes into functional and visually appealing interfaces.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eTroubleshoot and debug front-end issues to ensure a consistent user experience across multiple devices and browsers.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eStay updated with emerging front-end technologies and best practices to continuously improve development processes.\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cstrong\u003eQualifications\u003c/strong\u003e\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cdiv\u003eStrong proficiency in HTML, CSS, and JavaScript.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eBasic knowledge of PHP and experience working with Laravel frameworks.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eHands-on experience with Vue.js or similar front-end frameworks.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eProficient in handling asynchronous HTTP requests and managing RESTful APIs.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eFamiliarity with basic UI/UX design principles and ability to collaborate with designers to deliver intuitive interfaces.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eStrong problem-solving skills and attention to detail.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eExcellent communication and teamwork abilities.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eBachelor’s degree in Computer Science, Information Technology, or a related field (or equivalent practical experience).\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cstrong\u003ePreferred\u003c/strong\u003e\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cdiv\u003eExperience with front-end build tools and version control systems like Git.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eFamiliarity with responsive design frameworks such as Bootstrap or Tailwind CSS.\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv\u003eA portfolio showcasing previous front-end development projects is a plus.\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003c/p\u003e",
  //   },
  //   author: "admin",
  //   salary: "$110K - $140K per year",
  //   createdAt: "2024-12-20T11:27:03.321372+00:00",
  //   skill: [],
  //   experience: "0",
  //   domain: "Frontend Development",

  //   jobType: "Remote",

  //   apply: "https://sourcefit.breezy.hr/p/a2f0304ab208-front-end-developer",
  // },

  const filterJobs = (data, Activefilter) => {
    return data.filter((job) =>
      Activefilter.every((filter) => {
        if (filter.value.length === 0) {
          // Skip this filter type if no values are active
          return true;
        }
        // Check if job's property matches any of the values in the filter
        return filter.value.includes(job[filter.type]);
      })
    );
  };

  useEffect(() => {
    // console.log(" filters from jobs ", Activefilter);
    if (Activefilter != null) {
      // filterJobs(data, Activefilter);
      const filteredJobs = filterJobs(data, Activefilter);
      console.log(filteredJobs)
    }
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
