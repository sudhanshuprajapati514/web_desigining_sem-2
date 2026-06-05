import { useState } from "react";

function Dashboard() {

  const [totalSkills, setTotalSkills] = useState("");
  const [completed, setCompleted] = useState("");
  const [pending, setPending] = useState("");
  const [streak, setStreak] = useState("");

  const [showData, setShowData] = useState(false);

  return (
    <div className="section">

      <h2>Career Progress Analyzer</h2>

      <input
        type="number"
        placeholder="Total Skills"
        value={totalSkills}
        onChange={(e)=>setTotalSkills(e.target.value)}
      />

      <input
        type="number"
        placeholder="Completed Skills"
        value={completed}
        onChange={(e)=>setCompleted(e.target.value)}
      />

      <input
        type="number"
        placeholder="Pending Skills"
        value={pending}
        onChange={(e)=>setPending(e.target.value)}
      />

      <input
        type="number"
        placeholder="Learning Streak (Days)"
        value={streak}
        onChange={(e)=>setStreak(e.target.value)}
      />

      <br /><br />

      <button onClick={()=>setShowData(true)}>
        Analyze Progress
      </button>

      {showData && (
        <div
          style={{
            display:"flex",
            gap:"20px",
            flexWrap:"wrap",
            marginTop:"20px"
          }}
        >
          <div className="card">
            Skills : {totalSkills}
          </div>

          <div className="card">
            Completed : {completed}
          </div>

          <div className="card">
            Pending : {pending}
          </div>

          <div className="card">
            Streak : {streak} Days
          </div>
        </div>
      )}

    </div>
  );
}

export default Dashboard;