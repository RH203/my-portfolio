import { Card, Button } from "@material-tailwind/react";
import { LogoGithub, MailOutline, LogoInstagram } from "react-ionicons";
import { Link, BrowserRouter as Router } from "react-router-dom";
import TypeIt from "typeit-react";

export default function AboutMe() {
  return (
    <Card className="w-10/12 mx-auto my-14 bg-white dark:bg-gray-300 shadow-xl text-gray-900 p-10 grid grid-rows-1">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
        <div className="">
          <img
            className="h-96 w-96 rounded-full object-cover object-center mr-0 md:mb-5"
            src="/img/killua.jpeg"
            alt="nature image"
          />
        </div>
        <div className="flex lg:justify-start lg:items-start flex-col col-span-2 md:col-span-1 sm:col-span-1 my-auto ml-5 gap-8 md:justify-center md:items-center">
          <div>
            <header>
              <h3 className="font-bold text-5xl font-poppins">Welcome to</h3>
            </header>

            <div className="">
              <TypeIt
                className="font-medium text-2xl font-poppins"
                options={{ loop: true, loopDelay: 3500 }}
                getBeforeInit={(instance) => {
                  instance
                    .type("My Personal Webesit")
                    .pause(750)
                    .delete(4)
                    .pause(500)
                    .type("site!");

                  // Remember to return it!
                  return instance;
                }}
              />
            </div>
          </div>

          <Router>
            <div className="flex gap-3 bg-transparent">
              <Link to="https://github.com/RH203">
                <Button variant="outlined">
                  <LogoGithub />
                </Button>
              </Link>
              <Link to="mailto:raihanz863@gmail.com">
                <Button variant="outlined">
                  <MailOutline />
                </Button>
              </Link>
              <Link to="https://www.instagram.com/raihan.nnn/">
                <Button variant="outlined">
                  <LogoInstagram />
                </Button>
              </Link>
            </div>
          </Router>
        </div>
      </div>
    </Card>
  );
}
