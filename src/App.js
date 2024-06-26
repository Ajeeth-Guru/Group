import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Order from './components/Order';
import Product from './components/Product';
import New from './components/New';
import Offer from './components/Offer';
import User from './components/User';
import Sign from './components/Sign';
import Login from './components/Login';
import Projecthome from './groupproject/Projecthome';
import Projectnav from './groupproject/Projectnav';
import Projectabout from './groupproject/Projectabout';
import ProjectDoner from './groupproject/ProjectDoner';
import Projectwant from './groupproject/Projectwant';
import Admin from './groupproject/Admin';


function App() {
  return (
    <div className="App">
      <Projectnav/>
   <Routes>
    <Route path='/' element={<Projecthome/>}/>
    <Route path='/admin'element={<Admin/>}/>
    <Route path='/Projectabout' element={<Projectabout/>}/>
    <Route path='/ProjectDoner' element={<ProjectDoner/>}/>
    <Route path='/Projectwant' element={<Projectwant/>}/>
      {/* <Route path='update' element={<BloodUpdate/>}/> */}
    


   </Routes>
    </div>
  );
}

export default App;
