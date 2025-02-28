function StartGame({ toggle }) {
  return (
    <>
      <div className="flex w-[1180px]  m-auto items-center mt-16 bg-gray-500 p-10">
        <div>
          <img src="/images/dices.png" alt="" />
        </div>
        <div className="">
          <h1 className="font-bold text-[95px] whitespace-nowrap m-2 ">
            DICE GAME
          </h1>
          <button
            onClick={toggle}
            className="bg-black text-white px-[10px] py-[10px] min-w-[220px] border-2 rounded-lg hover:bg-white hover:text-black 
                  hover:font-bold hover:border-2 hover:border-solid hover:border-green-500 duration-[0.5s]"
          >
            Play Now
          </button>
        </div>
      </div>
    </>
  );
}

export default StartGame;
