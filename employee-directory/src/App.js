import './App.css';
import Container from "./components/Container/container"
import Employees from "./employees.json"
function App() {
  return (
    <div>
      <Container employees={Employees}></Container>
    </div>
  );
}

export default App;
