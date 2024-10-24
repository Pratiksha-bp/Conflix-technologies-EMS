

import './App.css';
import Consume8 from './Components/Consume8';
import LandingPage from './Components/LandingPage';
import { Outlet } from 'react-router-dom';
import Customnav from './Components/Customnav';
import UserName from './Components/UserName';
import Changepassword from './Components/Changepassword';



function App() {
  return (
 <>
 <body style={{backgroundColor:"#e6e6fa"}}>
  <div>
  <LandingPage></LandingPage>
  <Outlet></Outlet>
  </div>
 </body>


   </>
  );
}

export default App;
