import { Typography } from "@material-tailwind/react";

export default function FooTer() {
  return (
    <footer className=" w-full bg-gray-300 dark:bg-gray-900 gap-y-6 border-t border-gray-400 gap-x-12 py-6 px-6 text-center md:justify-between">
      <Typography
        color="blue-gray"
        variant="h5"
        className="font-normal text-blue-gray-900 dark:text-white flex justify-center items-center"
      >
        &copy; Raihan Firdaus
      </Typography>
    </footer>
  );
}
