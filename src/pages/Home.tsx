import { useState } from "react";

const Love = () => {
  return (
    <div>
      <div className="text-[30px] text-center font-bold">I love you</div>
      <div
        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        style={{
          backgroundImage: `url("https://media1.tenor.com/m/gmNAtqy-UpsAAAAC/milk-and-mocha-hug.gif")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export const Home = () => {
  const [buttonPosition, setButtonPosition]: any = useState({
    x: "50%",
    y: "50%",
  });
  const [up, setUp] = useState(false);
  const handleButton = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    const distance = Math.sqrt(
      Math.pow(x - (rect.width + rect.left / 2), 2) +
        Math.pow(y - (rect.height + rect.top / 2), 2)
    );
    console.log(rect);
    console.log("x", x);
    console.log("y", y);
    console.log("d", distance);
    const rand = Math.floor(Math.random() * 200);
    const rand1 = Math.floor(Math.random() * 200);
    console.log(rand);
    if (distance < 100 || distance > 100) {
      const i = Math.floor(Math.random() * (x - rect.x)) + rand;
      const j = Math.floor(Math.random() * (y - rect.y)) + rand1;
      setButtonPosition({ x: i, y: j });
      console.log(buttonPosition.x, buttonPosition.y);

      console.log("Collision detected!", buttonPosition);
    }
  };

  return (
    <div className="max-w-full h-screen flex justify-center items-center bg-red-300">
      {up ? (
        <Love />
      ) : (
        <div
          className="min-w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-red-500 relative flex flex-col justify-center items-center"
          style={{ boxShadow: "10px 10px 40px 0px rgba(0,0,0,0.75)" }}
        >
          <div className="font-extrabold text-[30px] md:text-[50px] text-center w-[70%] mb-5">
            Will you be my VAL?
          </div>
          <div className=" min-w-[50%] flex">
            <button
              className="bg-white border-[3px] border-black py-[10px] px-[30px] rounded-sm mr-[50px]"
              onClick={() => {
                {
                  setUp(true);
                }
              }}
            >
              Yes
            </button>

            <div className="ml-[30px]">
              <button
                className="bg-red-500 py-[10px] px-[30px] rounded-sm  text-white border-[3px] border-black "
                style={{
                  position: "absolute",
                  left: `${buttonPosition.x}px`,
                  top: `${buttonPosition.y}px`,
                  transform: `translate(${buttonPosition.x - 100}px , ${
                    buttonPosition.y - 100
                  }px)`,
                  transition: " left 0.4s ease-in, top 0.4s ease-in-out",
                  boxShadow: "10px 10px 20px -5px rgba(240,236,236,0.75)",
                }}
                onMouseMove={handleButton}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
