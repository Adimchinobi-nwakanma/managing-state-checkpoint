// Import the React library
import { useState } from "react";
import TaskForm from "../src/components/TaskForm";
import TaskList from "../src/components/TaskList";

// Define the Home component as a functional component
const Home = () => {
  const [tasks, setTasks] = useState([]);
  // Define the CSS style for the container
  const style = {
    display: "grid", // Layout the container as a grid
    placeItems: "center", // Center the items within the grid
    marginBlock: "2rem",
  };

  //   React.useEffect(() => {
  // // setTasks(tasks)
  //   }, [tasks])
  // Render the Home component
  return (
    <>
      <h1 className="text-center text-3xl text-red-500">
        My note app with react
      </h1>
      <section style={style}>
        <div className="max-w-[600px] mx-auto">
          <TaskForm setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </section>
    </>
  );
};

// Export the Home component to be used in other parts of the application
export default Home;
