import logo from './logo.svg';
import './App.css';
import Clickfunction from './components/clickfunction';
import Clickclass from './components/clickclass';
import Message from './components/message1';
import Signupform from './components/form';
import Condtionrender from './components/conditional_rendering';
import Listandmap from './components/list_and_map';
function App() {     
  return (
    <div className="App">
      <Clickclass/>
      <Clickfunction/>
      <Message/>
      <Signupform/>
      <Condtionrender/>
      <Listandmap />
    </div>
  );
}

export default App;
