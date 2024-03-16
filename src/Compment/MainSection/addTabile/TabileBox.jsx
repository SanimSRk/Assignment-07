const TabileBox = ({ CookingCart, deleteHandlers }) => {
  return (
    <div className="shadow-md rounded-lg">
      <div className="border-b-2 pb-4 lg:w-2/3 mx-auto text-center">
        <h2 className="text-xl font-semibold ">
          Want to cook:{CookingCart.length}
        </h2>
      </div>
      <div>
        <div className="overflow-hidden">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            {CookingCart.map((cookings, index) => (
              <tbody key={cookings.id} className=" mt-5 bg-[#28282808] my-6  ">
                {/* row 1 */}
                <tr className="">
                  <th>{index + 1}</th>
                  <td>{cookings.recipe_name}</td>
                  <td>{cookings.preparing_time} minutes</td>
                  <td>{cookings.calories} calories</td>

                  <th>
                    <button
                      onClick={() => deleteHandlers(cookings)}
                      className="rounded-3xl bg-[#0BE58A] btn"
                    >
                      Preparing
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="border-b-2 mt-8 pb-4 lg:w-2/3 mx-auto text-center">
          <h2 className="text-xl font-semibold ">Currently cooking:{}</h2>
        </div>
        <div className="overflow-hidden">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            {CookingCart.map((cookings, index) => (
              <tbody key={cookings.id} className=" mt-5 bg-[#28282808] my-6  ">
                {/* row 1 */}
                <tr className="">
                  <th>{index + 1}</th>
                  <td>{cookings.recipe_name}</td>
                  <td>{cookings.preparing_time} minutes</td>
                  <td>{cookings.calories} calories</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TabileBox;
