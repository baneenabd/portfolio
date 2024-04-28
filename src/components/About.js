import { useState } from "react";
import proimg from "./4.jpg";
function About() {
  const [proimg, setproimg] = useState(null);
  return (
    <div className="flex justify-between pl-10 pr-10 ml-10 mr-10">
      <div className="flex flex-col">
        <h1 className="italic text-3xl flex justify-start text-white">
          About me.
        </h1>
        <p className=" flex self-start text-white ">
          I’m inquisitive by nature and love exploring this beautiful world. I
          also enjoy volunteering and meeting new people . exploring this
          beautiful world. and also enjoy volunteering and meeting new people .
          I drink a lot of coffee and also Outside of work I enjoy travel,
          hiking, photography✨.
        </p>

        <hr className="my-10"></hr>
        <div className="flex border-dashed-2">
          <div>
            <h4 className="italic text-white underline  ">Graduation</h4>
            <p className="flex-wrap text-wrap text-sm italic self-start  text-white">
              College of Computer Science and Mathematics, Computer Department,
              University of Kufa, since 2019.
            </p>
            <br></br>
            <h4 className="italic text-white underline py-1">I learned</h4>
            <div className="flex   justify-start ">
              <img src={require("./html.png")} width="40" heigh="auto"></img>
              <img src={require("./css.png")} width="40" heigh="auto"></img>
              <img src={require("./java.png")} width="40" heigh="auto"></img>
              <img src={require("./react.png")} width="40" heigh="auto"></img>
              <img src={require("./figma.png")} width="40" heigh="auto"></img>
            </div>
          </div>

          <br></br>
          <div>
            {" "}
            <h4 className="italic text-white underline py-1"> Volunteering</h4>
            <ul className="italic text-white list-disc">
              <li>Najaf International Book Fair</li>
              <li>ALSHARQIA ACADEMY </li>
            </ul>
            <h4 className="italic text-white underline py-2">skills</h4>
            <ul className="italic text-white list-disc">
              <li> Teamwork</li>
              <li>The Sales</li>
              <li>Office programs</li>
              <li>Financial Accounts </li>
              <li>Photography</li>
            </ul>
          </div>

          {/* <div className=" border-2  h-52 w-52  self-center "></div> */}
          {/* <div className="border-2"> </div> */}
        </div>
      </div>
      <div className=" flex pr-100">
        {/* <img src={require("./4.jpg")} width="1000" heigh="auto"></img> */}
      </div>
    </div>
  );
}
export default About;
