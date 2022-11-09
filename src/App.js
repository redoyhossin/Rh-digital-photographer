import './App.css';
import Router from './Router/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div>
      <ToastContainer position='center'/>
     <Router/>
    </div>
  );
}




export default App;
