import { Card, Progress } from "antd";
import profilePic from "../assets/profile_pic.jpg";

const skills = [
  { name: "JavaScript", level: "Advanced", percentage: 90 },
  { name: "React.js", level: "Advanced", percentage: 85 },
  { name: "Node.js", level: "Intermediate", percentage: 75 },
  { name: "Express.js", level: "Intermediate", percentage: 70 },
  { name: "MongoDB", level: "Intermediate", percentage: 70 },
  { name: "MySQL", level: "Intermediate", percentage: 70 },
  { name: "Python", level: "Advanced", percentage: 90 },
  { name: "Django", level: "Intermediate", percentage: 75 },
  { name: "TypeScript", level: "Intermediate", percentage: 65 },
];

const About = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 underline underline-offset-4">
        About Me
      </h1>
      <div className="flex flex-col items-center mb-8">
        <img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-4"
        />
        <p className="text-lg text-center max-w-md mb-4">
          I am a passionate Full Stack Developer with expertise in building
          dynamic web applications. I love coding and enjoy learning new
          technologies to enhance my skills.
        </p>
        <p className="text-lg text-center max-w-md">
          I am from Bangladesh. I graduated with a degree in Computer Science &
          Engineering from Dhaka International University, Dhaka.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="shadow-lg p-4 bg-white rounded-lg skill-card hover:shadow-2xl hover:scale-105 transition-transform duration-300 hover:border-blue-500 hover:cursor-pointer hover:z-10"
          >
            <h3 className="text-xl font-semibold text-blue-500">
              {skill.name}
            </h3>
            <p className="text-gray-600">{skill.level}</p>
            <Progress
              percent={skill.percentage}
              strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              className="my-2"
              showInfo={false}
              size={"small"}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
