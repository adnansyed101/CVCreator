/* eslint-disable react/prop-types */
const EduOut = ({ eduStart, eduInstitute, eduEnd, eduTitle, eduDesc }) => {
  return (
    <div className="out">
      <div className="block"></div>
      <div className="insYear">
        <span>
          {new Date(eduStart).getFullYear()} - {new Date(eduEnd).getFullYear()}
        </span>
        <p>{eduInstitute ? eduInstitute : "ABC Institute"}</p>
      </div>
      <div className="titleDesc">
        <h4>{eduTitle ? eduTitle : "CSE"}</h4>
        <p>{eduDesc ? eduDesc : "This description"}</p>
      </div>
    </div>
  );
};

export default EduOut;
