const CookinShop = ({ cooking, handileClick }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = cooking;
  return (
    <div className="shadow-md p-6">
      <div>
        <img
          className="w-full object-cover object-center"
          src={recipe_image}
          alt=""
        />
      </div>
      <div className="mt-6 border-b-2 pb-4">
        <h2 className="text-xl font-semibold mb-4">{recipe_name}</h2>
        <p>{short_description} </p>
      </div>
      <div className="mt-4 ">
        <h2 className="font-medium mb-4">
          Ingredients : {ingredients.length}{' '}
        </h2>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
        <li>{ingredients[5]}</li>
      </div>
      <div className="flex items-center mt-6 justify-between">
        <div className="flex gap-2 items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h2>{preparing_time} minutes</h2>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>

          <h2>{calories} calories</h2>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => handileClick(cooking)}
          className="btn bg-[#0BE58A] rounded-3xl"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default CookinShop;
