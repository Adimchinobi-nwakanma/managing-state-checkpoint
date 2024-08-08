import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Modal, Input } from "antd";

const TaskItem = ({ id, title, completed, setTasks, tasks }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [editedTask, setEditedTask] = React.useState("");
  const handleDeleteTasks = () => {
    const deteletedTask = tasks.filter((item) => item.id !== id);
    setTasks(deteletedTask);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleUpdateTask = () => {
    tasks.forEach((element) => {
      if (element.id === id) {
        element.title = editedTask;
      }
    });

    setTasks(tasks);
    handleOk();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Edit tasks"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex gap-4">
          <Input
            size="large"
            onChange={(e) => setEditedTask(e.target.value)}
            placeholder="Create a task"
          />
          <Button onClick={handleUpdateTask}>Update task</Button>
        </div>
      </Modal>
      <div className="border-b-2 p-2 border-gray-500 flex items-center justify-between">
        <h2>{title}</h2>
        <div className="flex gap-4">
          <EditOutlined style={{ color: "green" }} onClick={showModal} />

          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleDeleteTasks}
          >
            <DeleteOutlined
              // onClick={handleDeleteTasks}
              style={{ color: "red" }}
            />
          </Popconfirm>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
