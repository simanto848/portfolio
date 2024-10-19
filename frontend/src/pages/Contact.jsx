import { Form, Input, Button, message } from "antd";
import axios from "axios";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios
      .post("/api/contact", values)
      .then((res) => {
        message.success("Message sent successfully!");
        form.resetFields();
      })
      .catch((err) => {
        message.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4 text-center underline underline-offset-8">
        Contact Me
      </h1>
      <div className="bg-white p-5 rounded-lg shadow-md max-w-xl mx-auto border">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please enter a subject" }]}
          >
            <Input placeholder="Enter the subject" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea
              rows={5}
              placeholder="Enter your message"
              className="resize-none"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
