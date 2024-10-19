import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "antd";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col xs={24} sm={12} md={8} key={project._id}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.image} />}
            >
              <Card.Meta
                title={project.title}
                description={project.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
