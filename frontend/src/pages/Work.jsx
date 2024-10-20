import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "antd";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center font-bold mb-4">My Works</h1>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col xs={24} sm={12} md={8} key={project._id}>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.image}
                  className="h-48 w-full object-cover"
                />
              }
              className="hover:scale-105 transition-transform duration-300 hover:cursor-pointer hover:z-10 hover:"
            >
              <div className="flex justify-between items-center">
                <Card.Meta title={project.title} />
                <Button
                  type="primary"
                  className="ml-4"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Work;
