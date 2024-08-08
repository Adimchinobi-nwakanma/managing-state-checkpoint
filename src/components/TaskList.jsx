import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="my-8 shadow-md p-2 rounded-md">
      {tasks.map((item) => {
        return (
          <TaskItem key={item.id} {...item} setTasks={setTasks} tasks={tasks} />
        );
      })}
    </div>
  );
};

export default TaskList;
