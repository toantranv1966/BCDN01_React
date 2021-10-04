import logo from './logo.svg';
import './App.css';
import '../src/css/styles.css'
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import Databinding from './DataBinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './State/StateDemo';
import ChangeFontSize from './State/ChangeFontSize';
import BaiTapThucHanhLayout from './Components/BaiTapLayoutComponent/BaiTapThucHanhLayout';

function App() {
  return (
    <div>
      {/* Hello */}
      {/* <HomeComponent/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      {/* <StateDemo/> */}
      {/* <ChangeFontSize/> */}
      <BaiTapThucHanhLayout/>
    </div>
  );
}

export default App;
