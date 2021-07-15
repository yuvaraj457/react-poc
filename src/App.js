import './App.css';
// import EmployeDetails from './components/textFragment';
import ErrorCheck from './components/errorBoundary';
import Hookbasic from './components/Hookbasic';
import Routepath from './components/Routepath'
import {BrowserRouter as Router} from 'react-router-dom'; 
import Nav from './components/menu';
import { userDetails } from './userData';
// import Employeenav from './components/Employeenav';

function App() {
  return (
    <div >
      <Router>
        <Nav/>
        <Routepath userDetails={userDetails}/>
      </Router>
      
      <ErrorCheck/>
      <Hookbasic/>
      {/* <Employeenav/> */}
    </div>
  );
}

export default App;
