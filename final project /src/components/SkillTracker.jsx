import { useState } from "react";

function SkillTracker() {

  const [skills,setSkills] = useState([
    {name:"HTML",done:true},
    {name:"CSS",done:true},
    {name:"JavaScript",done:false},
    {name:"React",done:false}
  ]);

  const toggleSkill = (index)=>{
    const updated=[...skills];
    updated[index].done=!updated[index].done;
    setSkills(updated);
  };

  return (
    <div className="section">
      <h2>Skill Tracker</h2>

      {skills.map((skill,index)=>(
        <div key={index}>
          <input
            type="checkbox"
            checked={skill.done}
            onChange={()=>toggleSkill(index)}
          />

          {skill.name}
        </div>
      ))}
    </div>
  );
}

export default SkillTracker;