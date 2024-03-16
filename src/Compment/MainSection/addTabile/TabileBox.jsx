const TabileBox = ({ CookingCart }) => {
  return (
    <div className="shadow-md rounded-lg">
      <div className="border-b-2 pb-4 lg:w-2/3 mx-auto text-center">
        <h2 className="text-xl font-semibold ">
          Want to cook:{CookingCart.length}
        </h2>
      </div>
      <div className="mt-3">
        <div className="flex w-2/3 pl-10  justify-between">
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </div>
        <div>
          {CookingCart.map((CookingCarts, index) => (
            <div
              key={CookingCarts.id}
              className=" flex gap-5 mb-4 items-center px-6 py-4 bg-[#28282808]"
            >
              <td>{index + 1}</td>
              <td>{CookingCarts.recipe_name}</td>
              <td>{CookingCarts.preparing_time} minutes</td>
              <td>{CookingCarts.calories} calories </td>
              <button className="bg-[#0BE58A] btn rounded-3xl">
                {' '}
                Preparing{' '}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabileBox;
