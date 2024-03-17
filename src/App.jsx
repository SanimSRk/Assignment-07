import { useState } from 'react';
import './App.css';
import Banner from './Compment/HadearSection/Banner';
import Naver from './Compment/HadearSection/Naver';
import Shoping from './Compment/MainSection/CookingCartd/Shoping';
import TabileBox from './Compment/MainSection/addTabile/TabileBox';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [CookingCart, setCookingCart] = useState([]);
  const [CurrentData, setCurrentData] = useState([]);
  const [tottleTime, setTottleTime] = useState(0);
  const [caloriesData, setCaloriesData] = useState(0);

  const handileClick = Cooking => {
    const isExist = CookingCart.find(item => item.id == Cooking.id);
    if (!isExist) {
      setCookingCart([...CookingCart, Cooking]);
    } else {
      toast.warn('already exists !');
    }
  };

  const deleteHandlers = (pipering, time, calories) => {
    const newDatas = CookingCart.filter(item => item.id != pipering.id);
    setCookingCart(newDatas);
    const newCurrentData = [...CurrentData, pipering];
    setCurrentData(newCurrentData);
    const newTimes = tottleTime + time;
    setTottleTime(newTimes);
    const newCalories = caloriesData + calories;
    setCaloriesData(newCalories);
  };

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
        <section className="my-[100px]">
          <div className="lg:w-2/3 mx-auto text-center">
            <h2 className="text-4xl font-semibold">Our Recipes</h2>
            <h2 className="mt-6">
              Welcome to "Our Recipes," where we share a curated collection of
              culinary creations to inspire your next cooking adventure. From
              comforting classics to innovative twists on traditional favorites,
              our recipes are crafted with care and designed to delight your
              taste buds.
            </h2>
          </div>
          <div className=" lg:flex gap-5 mt-12">
            <div className="lg:w-[63%] ">
              <Shoping handileClick={handileClick}></Shoping>
            </div>
            <div className=" lg:w-[37%] lg:mt-0 mt-8">
              <TabileBox
                CookingCart={CookingCart}
                deleteHandlers={deleteHandlers}
                CurrentData={CurrentData}
                tottleTime={tottleTime}
                caloriesData={caloriesData}
              >
                {' '}
              </TabileBox>
              <ToastContainer theme="colored" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
