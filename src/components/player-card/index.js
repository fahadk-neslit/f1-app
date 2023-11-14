import React from "react";

const data = {
  name: "Elon Musk",
  nationality: "Pakistan",
  age: "26",
  image:
    "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png",
};
function PlayerCard({ onClick, data }) {
  return (
    <div
      onClick={onClick}
      className="player-card-container group hover:border-[red] hover:scale-105 transition-all cursor-pointer"
    >
      <div className="flex justify-between items-center py-3 ">
        <h2>1</h2>
        <div className="mr-3">
          <p className="font-normal text-lg">Nationality</p>
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
          <p className="font-thin">Elon</p>
          <h1> Musk</h1>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <img
          src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png"
          width={250}
          height={250}
          className="mt-2"
        />
        <h1 className="absolute left-0 bottom-0 px-8 bg-white font-black ">
          age
        </h1>
      </div>
    </div>
  );
}

export default PlayerCard;
