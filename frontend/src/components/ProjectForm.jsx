import { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const ProjectForm = ({ project, onSuccess }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (project) {
      form.setFieldsValue(project);
    } else {
      form.resetFields();
    }
  }, [project, form]);

  const onFinish = async (values) => {
    try {
      if (project) {
        await axios.put(`/api/projects/${project._id}`, values);
        message.success("Project updated successfully");
      } else {
        await axios.post("/api/projects/add", values);
        message.success("Project added successfully");
      }
      onSuccess();
    } catch (error) {
      message.error("Failed to save project");
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please input the project title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          { required: true, message: "Please input the project description!" },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name="technologies"
        label="Technologies"
        rules={[{ required: true, message: "Please input the technologies!" }]}
      >
        <Input placeholder="React, Node.js, etc." />
      </Form.Item>
      <Form.Item name="link" label="Project Link">
        <Input placeholder="URL of the project" />
      </Form.Item>
      <Form.Item name="image" label="Image URL">
        <Input placeholder="URL of the project image" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {project ? "Update Project" : "Add Project"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProjectForm;
