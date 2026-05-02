import { Link } from "react-router-dom";
function About() {
  return (
    <div className="p-10 text-center space-y-6 mt-30">
      <h1 className="text-4xl font-bold">About Me</h1>

      <p>
        Online Voting System, a full-stack developer passionate about building web applications.
      </p>

      <h2 className="text-2xl font-semibold">Skills</h2>
      <p>React | Node.js | Express | MongoDB | Tailwind CSS</p>

      <h2 className="text-2xl font-semibold">Projects</h2>
      <p>Online Voting System </p>

      <Link to="/contact">
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Contact Me
  </button>
</Link>
    </div>
  );
}

export default About;