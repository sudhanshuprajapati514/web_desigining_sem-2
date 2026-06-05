import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SkillTracker from "./components/SkillTracker";
import Roadmap from "./components/Roadmap";
import ResumeAnalyzer from "./components/ResumeAnalyzer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Dashboard />
        <SkillTracker />
        <Roadmap />
        <ResumeAnalyzer />
      </div>
    </>
  );
}

export default App;