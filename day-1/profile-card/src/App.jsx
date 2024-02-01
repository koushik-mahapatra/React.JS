const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFe810",
  },
  {
    skill: "Tailwind CSS",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src="https://avatars.githubusercontent.com/u/121472752?v=4"
        alt=""
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Koushik Mahapatra</h1>
      <p>
        Aspiring FrontEnd developer. Like to play with JavaScript and started
        learning React.JS
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "😩"}
        {skillObj.level === "intermediate" && "🤌"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
