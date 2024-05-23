import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function PersonalAssistant() {
  const [answer, setAnswer] = useState();

  const submitUser = () => {};

  return (
    <div className="w-10/12 mx-auto my-36 grid grid-rows-2">
      <div className="grid grid-cols-3 gap-5">
        <div className="relative flex w-full gap-2 col-span-2">
          <Input
            type="search"
            placeholder="Search"
            containerProps={{
              className: "max-w-full",
            }}
            className=" !border-t-blue-gray-300 dark:placeholder:text-gray-900 placeholder:text-gray-900 focus:!border-blue-gray-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button
          className="rounded-lg dark:text-white text-white bg-gray-600"
          ripple={true}
        >
          Search
        </Button>
      </div>
      <div className="text-gray-900">
        <p></p>
      </div>
    </div>
  );
}
