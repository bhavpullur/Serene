import React from "react";
import Image from "next/image";
import Left from "./left";
import Right from "./right";
const page = () => {
  return (
    <div className="flex flex-row justify-between my-12 mx-10">
      {/* lef*/}
      <Left></Left>
      {/* PARTITION */}
      <div className="w-[2px] h-[700px] bg-white mx-4 "></div>

      {/*right  */}
      <Right></Right>
    </div>
  );
};

export default page;
