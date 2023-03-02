import logo from './logo.svg';
import './App.css';
// import Greeting from './components/Pure/greeting';
// import GreetingF from './components/Pure/greetingF';
// import TaskListComponent from './components/container/task.list';
import TasklistComponent123 from './components/container/task.list123';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name= "Yeison"></Greeting> */}
        {/* <GreetingF name="Yei"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        <TasklistComponent123></TasklistComponent123>
      </header>
    </div>
  );
}

export default App;
