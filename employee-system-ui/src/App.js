
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index element={<EmployeeList/>}></Route>  // default path
          <Route path='/' element={<EmployeeList/>}></Route>
          <Route path='/list' element={<EmployeeList/>}></Route>
          <Route path='/add' element={<AddEmployee/>}></Route>
          <Route path='/editEmployee/:id' element={<UpdateEmployee/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
