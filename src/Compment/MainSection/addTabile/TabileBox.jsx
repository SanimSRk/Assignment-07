const TabileBox = ({
  CookingCart,
  deleteHandlers,
  CurrentData,
  tottleTime,
  caloriesData,
}) => {
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
                      onClick={() =>
                        deleteHandlers(
                          cookings,
                          cookings.preparing_time,
                          cookings.calories
                        )
                      }
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
          <h2 className="text-xl font-semibold ">
            Currently cooking:{CurrentData.length}
          </h2>
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
            {CurrentData.map((currentValue, index) => (
              <tbody
                key={currentValue.id}
                className=" mt-5 bg-[#28282808] my-6  "
              >
                {/* row 1 */}
                <tr className="">
                  <th>{index + 1}</th>
                  <td>{currentValue.recipe_name}</td>
                  <td>{currentValue.preparing_time} minutes</td>
                  <td>{currentValue.calories} calories</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="mt-5 grid justify-center">
          <table className="table text-center text-xl ">
            <thead>
              <tr>
                <th className="text-xl">Total Time=</th>
                <th className="text-xl">Tottle calories=</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{tottleTime} minutes</td>
                <td>{caloriesData} calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TabileBox;
