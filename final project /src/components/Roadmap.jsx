import { useState } from "react";

function Roadmap(){

  const [career,setCareer]=useState("");

  const roadmap={
    WebDeveloper:[
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "NodeJS"
    ],

    AIEngineer:[
      "Python",
      "Statistics",
      "Machine Learning",
      "Deep Learning"
    ]
  };

  return(
    <div className="section">

      <h2>Career Roadmap</h2>

      <select
        onChange={(e)=>setCareer(e.target.value)}
      >
        <option>Select Career</option>

        <option value="WebDeveloper">
          Web Developer
        </option>

        <option value="AIEngineer">
          AI Engineer
        </option>

      </select>

      <ul>
        {roadmap[career]?.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default Roadmap;