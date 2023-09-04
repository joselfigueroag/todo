import "./App.css";
import Logo from "./components/Logo";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <div className="principal">
          <h1>Mis tareas</h1>
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
