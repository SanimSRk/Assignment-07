const Banner = () => {
  return (
    <div className=" mt-4">
      <div className="bg-[url('/image/Rectangle.png')] lg:p-0 py-7 lg:h-[570px] rounded-lg  bg-cover bg-center r">
        <div className=" grid h-full items-center text-white text-center my-auto lg:w-2/3 mx-auto ">
          <div>
            <h2 className="font-bold text-3xl lg:text-5xl ">
              Discover an exceptional cooking class tailored for you!
            </h2>
            <p className=" mt-6">
              Cooking is the art and science of preparing food through various
              techniques such as chopping, mixing, heating, and seasoning to
              create delicious and nutritious meals.
            </p>
            <div className=" lg:flex block gap-7 mt-10 justify-center">
              <button className="btn  text-xl font-semibold bg-[#0BE58A] border-none rounded-3xl">
                Explore Now{' '}
              </button>
              <button className="btn  bg-transparent text-xl font-semibold text-white rounded-3xl">
                Our Feedback{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
