import { useEffect } from 'react';
import { useState } from 'react';
import CookinShop from './CookinShop';

const Shoping = ({ handileClick }) => {
  const [cooking, setCooking] = useState([]);
  useEffect(() => {
    fetch('allData.json')
      .then(res => res.json())
      .then(data => setCooking(data));
  }, []);

  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8">
      {cooking.map(cooking => (
        <CookinShop
          key={cooking.id}
          handileClick={handileClick}
          cooking={cooking}
        ></CookinShop>
      ))}
    </div>
  );
};

export default Shoping;
