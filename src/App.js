
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (

    <Routes>
      <Route path='/*' element={<CustomerRouters/>}></Route>
    </Routes>


   
  );
}

export default App;
