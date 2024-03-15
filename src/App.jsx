import './App.css';
import Banner from './Compment/HadearSection/Banner';
import Naver from './Compment/HadearSection/Naver';

function App() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        {/* ----naver section styele done ---- */}
        <div>
          <Naver></Naver>
        </div>
        {/* --Banner section is styeles  */}
        <div>
          <Banner></Banner>
        </div>
      </div>
    </>
  );
}

export default App;
