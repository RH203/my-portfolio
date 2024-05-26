import TypeIt from "typeit-react";
import { Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import runModel from "../personal_asistant/Asistant";
import { IconButton } from "@material-tailwind/react";
import Lottie from "lottie-react";
import nothingAnimation from "../assets/nothingAnimation.json";

export default function PersonalAssistant() {
  const [userMessage, setUserMessage] = useState("");
  const [response, setResponse] = useState(null);

  const handleFormBot = (event) => {
    event.preventDefault();
    setUserMessage(event.target.message.value);
  };

  useEffect(() => {
    if (userMessage) {
      const fetchData = async () => {
        const response = await runModel(userMessage);
        setResponse(response);
      };
      fetchData();
    }
  }, [userMessage]);

  return (
    <div className="w-10/12 h-96 mx-auto mb-48 mt-20 overscroll-none">
      <div className="flex flex-col gap-10">
        {/* Header Start */}
        <header className="text-center">
          <h3 className="font-poppins font-semibold text-2xl dark:text-white">
            <TypeIt
              options={{ loop: true, loopDelay: 4000 }}
              getBeforeInit={(instance) => {
                instance
                  .type("Need more information about me? Ask Iobe")
                  .pause(800)
                  .type(" Oops")
                  .pause(700)
                  .delete(10)
                  .pause(750)
                  .type(" Bobi!")
                  .pause(500);
                return instance;
              }}
            />
          </h3>
        </header>
        {/* Header End */}

        {/* Chat box Start*/}
        <form
          onSubmit={handleFormBot}
          className="w-full h-10 flex gap-2 justify-center mt-10"
        >
          <input
            name="message"
            placeholder="Ask Bobi..."
            className="w-3/4 h-10 p-3 focus:outline-none border border-gray-500 rounded-lg"
          />
          <IconButton type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </IconButton>
        </form>
        {/* Chat box Start*/}

        {/* Output start */}
        <Card className="w-full h-72 p-5 grid grid-rows-3 bg-white dark:bg-gray-300">
          <header className="text-center  row-span-1">
            <h3 className="font-poppins font-semibold text-2xl text-white dark:text-black">
              Output
            </h3>
            <hr className="border border-gray-400 mx-64 mt-2" />
          </header>

          <div className="w-full h-full text-center row-span-2">
            {response === null ? (
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={nothingAnimation}
                  loop={true}
                  className="w-44"
                />
                <p
                  className="
                  font-poppins
                  font-semibold
                  text-2xl
                  text-black "
                >
                  No data
                </p>
              </div>
            ) : (
              <p className="font-poppins font-medium text-xl text-black">
                <TypeIt
                  getBeforeInit={(instance) => {
                    instance.type(response);
                    return instance;
                  }}
                />
              </p>
            )}
          </div>
        </Card>
        {/* Output End */}
      </div>
    </div>
  );
}
