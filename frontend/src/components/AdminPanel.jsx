import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import axios from "axios";
import ProjectForm from "./ProjectForm";

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/projects");
      setProjects(res.data);
    } catch (error) {
      message.error("Failed to fetch projects");
    }
  };

  const handleAddProject = () => {
    setCurrentProject(null);
    setIsModalVisible(true);
  };

  const handleEditProject = (record) => {
    setCurrentProject(record);
    setIsModalVisible(true);
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      message.success("Project deleted successfully");
      fetchProjects();
    } catch (error) {
      message.error("Failed to delete project");
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          <Button
            onClick={() => handleEditProject(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button danger onClick={() => handleDeleteProject(record._id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>
      <Button
        type="primary"
        onClick={handleAddProject}
        style={{ marginBottom: 16 }}
      >
        Add Project
      </Button>
      <Table columns={columns} dataSource={projects} rowKey="_id" />

      <Modal
        title={currentProject ? "Edit Project" : "Add Project"}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <ProjectForm
          project={currentProject}
          onSuccess={() => {
            fetchProjects();
            setIsModalVisible(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default AdminPanel;
