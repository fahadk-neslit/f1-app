import React from "react";

function CarCard() {
  return (
    <div className="car-card-container group hover:border-[red] hover:scale-105 transition-all cursor-pointer">
      <div className="flex justify-between items-center py-3 ">
        <h2>1</h2>
        <div className="mr-3">
          <p className="font-bold text-xl">123</p>
          <p className="rounded-xl bg-black text-white font-bold text-sm px-[5px] py-[0px]">
            PTS
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 py-2 mr-2"
        style={{
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          className="bg-black group-hover:bg-red-600"
          style={{
            width: 6,
            height: 50,
          }}
        ></div>
        <div>
          <p className="font-thin">Max</p>
          <h1> Perez</h1>
        </div>
      </div>
      <div className="relative flex items-center flex-col">
        <div className="flex justify-between w-full pr-2 mt-2 gap-4">
          <p className="text-blackf flex w-[50%] p-2 border-small-bottom-right">
            Driver 1
          </p>
          <p className="text-black flex  w-[50%] p-2 border-small-bottom-right">
            Driver 2
          </p>
        </div>
        <img
          src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/4col-retina/image.png"
          width={250}
          height={250}
          className="mt-16"
        />
        <h1 className="absolute left-0 bottom-0 px-8 bg-white font-black ">
          1
        </h1>
      </div>
    </div>
  );
}

export default CarCard;
