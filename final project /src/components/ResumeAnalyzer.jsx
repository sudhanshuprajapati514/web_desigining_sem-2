import { useState } from "react";

function ResumeAnalyzer(){

  const [resume,setResume]=useState("");
  const [score,setScore]=useState(null);

  const analyzeResume=()=>{

    let total=50;

    if(resume.includes("HTML")) total+=10;
    if(resume.includes("CSS")) total+=10;
    if(resume.includes("JavaScript")) total+=15;
    if(resume.includes("React")) total+=15;

    setScore(total);
  };

  return(
    <div className="section">

      <h2>Resume Analyzer</h2>

      <textarea
        rows="8"
        cols="60"
        value={resume}
        onChange={(e)=>setResume(e.target.value)}
      />

      <br/>
      <br/>

      <button onClick={analyzeResume}>
        Analyze Resume
      </button>

      {score && (
        <h3>
          Resume Score : {score}/100
        </h3>
      )}

    </div>
  );
}

export default ResumeAnalyzer;