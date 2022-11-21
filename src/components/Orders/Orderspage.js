import '../../App.css'
import Orders from './Orderspage';
import RightSide from '../RigtSide/RightSide';
import Sidebar from '../Sidebar';

function Orderspage() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Orders />
        <RightSide/>
      </div>
    </div>
  );
}

export default Orderspage;
