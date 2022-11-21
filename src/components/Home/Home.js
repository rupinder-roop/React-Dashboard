import { BrowserRouter } from 'react-router-dom';
import '../../App.css'
import MainDash from '../MainDash/MainDash';
import Orders from '../Orders/Orders';
import RightSide from '../RigtSide/RightSide';
import Sidebar from '../Sidebar';

function Home() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default Home;
