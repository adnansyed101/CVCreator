import { getYear } from "date-fns";

/* eslint-disable react/prop-types */
const JobOut = ({ jobStart, jobInstitute, jobEnd, jobTitle, jobDesc }) => {
  return (
    <div className="out">
      <div className="block"></div>
      <div className="insYear">
        <span>
          {getYear(new Date(jobStart))} - {getYear(new Date(jobEnd))}
        </span>
        <p>{jobInstitute ? jobInstitute : "ABC Institute"}</p>
      </div>
      <div className="titleDesc">
        <h4>{jobTitle ? jobTitle : "Senior Developer"}</h4>
        <p>{jobDesc ? jobDesc : "This description"}</p>
      </div>
    </div>
  );
};

export default JobOut;
