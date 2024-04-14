import { useEffect } from "react";
import React from "react";
import insta from "./insta.png";
import github from "./github.png";

function Contact() {
  const RedirectPag = () => {
    window.location.replace("https://github.com/baneenabd");
  };
  const insta = () => {
    window.location.replace(
      "https://www.instagram.com/itsbaneen95?igsh=aWwwZDZ0YTJvNHhl&utm_source=qr"
    );
  };
  const netlify = () => {
    window.location.replace("https://app.netlify.com/teams/baneenabd/overview");
  };

  return (
    <div id="contact">
      <div className="flex flex-col">
        <div>
          <div className="flex justify-between flex-col  pl-10 pr-10 ml-10 mr-10">
            <div>
              <h1 className="italic text-3xl flex justify-start text-white">
                contact.
              </h1>

              <div className="flex flex-col gap-4 py-3">
                <div className="flex">
                  <img
                    onClick={RedirectPag}
                    src={github}
                    alt="Github"
                    width="20"
                    height="20"
                    className="rounded-full  "
                  ></img>
                  <p className="pl-2  italic text-white">github</p>
                </div>
                <div className="flex">
                  <img
                    onClick={RedirectPag}
                    src={require("./netlify.png")}
                    alt="netlify"
                    width="20"
                    height="20"
                    className="rounded-full "
                  ></img>
                  <p className=" pl-2  italic text-white"> netlify </p>
                </div>
                <div className="flex">
                  <img
                    onClick={RedirectPag}
                    src={require("./insta.png")}
                    alt="insta"
                    width="20"
                    height="20"
                    className="rounded-full "
                  ></img>
                  <p className="pl-2  italic text-white"> instagram</p>
                </div>
              </div>
            </div>

            <hr className=" border-1 border-white mt-10]"></hr>
            <div className="flex  flex-col ">
              <p className="text-xs ml-1  py-10 italic text-white">
                Got a question or proposal, or just want to say hello? Go
                ahead🫠.
              </p>

              <label className="self-start py-1 pt-4 ml-2 italic text-white text-xs font-extralight">
                Name
              </label>
              <input
                type="text"
                className="border-2 border-s border-white  ml-2  bg-white"
              ></input>
              <label className="self-start py-1 pt-4 ml-2  italic text-white text-xs font-extralight">
                Email
              </label>
              <input
                type="text"
                className="border-2 border-s border-white ml-2  bg-white"
              ></input>
              <div className="flex flex-col ">
                <label className="self-start py-1 pt-4 ml-2  italic text-white text-xs font-extralight">
                  Messsage
                </label>

                <textarea
                  rows="6"
                  cols="40"
                  className="border-2 ml-2 "
                ></textarea>
                <div className="self-center py-2">
                  <button
                    type="button"
                    className="h-35 w-55  bg-white   italic text-sm text-[#102c57] border-2 border-solid "
                  >
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
