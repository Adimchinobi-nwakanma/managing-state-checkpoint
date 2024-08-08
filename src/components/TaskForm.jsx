import { Button, Input } from "antd";
import React, { useState } from "react";

const TaskForm = ({ setTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleCreateTask = (e) => {
    console.log(e.target);
    setTasks((prevTasks) => {
      return [
        {
          id: Date.now(),
          title: taskTitle,
          completed: false,
        },
        ...prevTasks,
      ];
    });
  };

  return (
    <div className="flex gap-4">
      <Input
        size="large"
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Create a task"
      />
      <Button onClick={(e) => handleCreateTask(e)} size="large">
        Create
      </Button>
    </div>
  );
};

export default TaskForm;
