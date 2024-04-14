import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import header from "./header.jpg";

const Home = ({ theme }) => {
  return (
    <div className={theme === "dark" && "bg-Darkblue text-white"}>
      <div className="flex justify-between pl-10 pr-10 ml-10 mr-10">
        <div className="flex flex-col w-1/2">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="italic text-2xl text-white">Hi👋,I'm Baneen.</h1>
          <p className="text-white">
            I'm have strong interpersonal skills, creativity, and motivation to
            help organizations acquire and retain clients over the long term.
          </p>
        </div>
        <div className=" flex pr-100 ">
          <img
            src={header}
            alt="Hader"
            width="300"
            height="300"
            className="rounded-full"
          ></img>
        </div>
      </div>
      {/* <div>
        <Header theme={theme} />
      </div> */}
      {/* <div>
        <About />
      </div>
      <div>
        <Contact />
      </div> */}
    </div>
  );
};
export default Home;
