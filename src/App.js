import './App.css';
import Router from './Router/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-photo-view/dist/react-photo-view.css';



function App() {
  return (
    <div>
      <ToastContainer position='center'/>
     <Router/>
    </div>
  );
}




export default App;
