import { MyCard } from "../components";
import { motion } from "framer-motion";

export default function MyProject() {
  const cards = Array.from({ length: 3 }, (_, index) => <MyCard key={index} />);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
      className="w-10/12 mx-auto flex flex-col mt-36 gap-14"
    >
      <header className="text-center">
        <h3 className="font-poppins text-6xl font-semibold dark:text-white">
          My Project
        </h3>
      </header>
      <div className="grid lg:grid-rows-2 md:grid-rows-2 sm:grid-rows-2 lg:gap-10 md:gap-5 sm:gap-3">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            delay: 2,
            x: 0,
          }}
          className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-5 md:gap-3 sm:gap-2"
        >
          {cards}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            delay: 2,
            x: 0,
          }}
          className="grid lg:grid-cols-3 lg:gap-5 md:gap-3 sm:gap-2"
        >
          {cards}
        </motion.div>
      </div>
    </motion.div>
  );
}
