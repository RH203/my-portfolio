import { MyCard } from "../components";

export default function MyProject() {
  const cards = Array.from({ length: 3 }, (_, index) => <MyCard key={index} />);
  return (
    <div className="w-10/12 mx-auto flex flex-col mt-36 gap-14">
      <header className="text-center">
        <h3 className="font-poppins text-6xl font-semibold dark:text-white">
          My Project
        </h3>
      </header>
      <div className="grid lg:grid-rows-2 md:grid-rows-2 sm:grid-rows-2 lg:gap-10 md:gap-5 sm:gap-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-5 md:gap-3 sm:gap-2">{cards}</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-5 md:gap-3 sm:gap-2">{cards}</div>
      </div>
    </div>
  );
}
