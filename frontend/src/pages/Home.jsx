import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <div className="p-5">
      <div className="bg-white rounded-lg shadow-md p-5 mb-8 text-center">
        <Avatar
          size={150}
          src="/path-to-your-profile-picture.jpg"
          icon={<UserOutlined />}
          className="mx-auto"
        />
        <h2 className="text-3xl font-bold mt-4">Your Name</h2>
        <p className="text-gray-600 mt-2">
          A brief description about yourself. Highlight your skills, experience,
          and what makes you passionate about development.
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Email:</strong> your.email@example.com
        </p>
        <p className="text-gray-600">
          <strong>Location:</strong> City, Country
        </p>
        <p className="text-gray-600">
          <strong>Experience:</strong> Full Stack Developer with expertise in
          MERN stack, TailwindCSS, and Ant Design.
        </p>
        <div className="mt-5 flex justify-center gap-4">
          <Button
            type="primary"
            href="/path-to-your-cv.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600"
          >
            Download CV
          </Button>
          <Button
            type="default"
            className="bg-green-500 text-white hover:bg-green-600"
            onClick={() =>
              (window.location.href = "mailto:your.email@example.com")
            }
          >
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
