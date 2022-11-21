import './App.css'

import Home from './components/Home/Home.js';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Orderspage from './components/Orders/Orderspage';
import Sidebar from './components/Sidebar';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/Orderspage' element={<Orderspage />} />
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
