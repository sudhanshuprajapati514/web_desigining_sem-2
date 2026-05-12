import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Student Details</h1>

      <div style={{
        border: "1px solid black",
        width: "250px",
        margin: "10px auto",
        padding: "10px",
        borderRadius: "8px"
      }}>
        <p>Name: Prajapati</p>
        <p>Roll No: 1185</p>
        <p>Subject: DSA</p>
      </div>

      <div style={{
        border: "1px solid black",
        width: "250px",
        margin: "10px auto",
        padding: "10px",
        borderRadius: "8px"
      }}>
        <p>Name: Pandey</p>
        <p>Roll No: 1186</p>
        <p>Subject: Cyber</p>
      </div>

      <div style={{
        border: "1px solid black",
        width: "250px",
        margin: "10px auto",
        padding: "10px",
        borderRadius: "8px"
      }}>
        <p>Name: surya</p>
        <p>Roll No: 1168</p>
        <p>Subject: Sql</p>
      </div>

    </div>
  );
}

export default App;