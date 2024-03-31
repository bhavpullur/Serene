import React from "react";
import Image from "next/image";
const Right = () => {
  return (
    <div className="flex  flex-col  items-center mx-9 my-16">
      <div className="flex w-full justify-center items-center">
        {/*image  */}
        <Image
          src={"/magic.jpg"}
          height={300}
          width={300}
          alt="magic"
          className="rounded-md   border border-white "
        ></Image>
      </div>
      {/* text */}
      <div className="flex jost text-white text-[20px] justify-center">
        THE MAGIC STAR
      </div>
      {/* play button */}
      <div className="flex flex-row justify-center items-center gap-1">
        {/* time */}
        <div className="flex text-white text-[10px] ">12:26</div>
        {/* play line */}
        <div className="flex">
          <svg
            width="234"
            height="7"
            viewBox="0 0 234 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="234" height="7" rx="3.5" fill="#303030" />
            <rect width="36" height="7" fill="#E9E9E9" />
          </svg>
        </div>
      </div>
      {/* like pause save */}
      <div>
        {/*like */}
        <div></div>
      </div>
    </div>
  );
};

export default Right;
