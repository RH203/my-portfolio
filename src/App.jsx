import { FooTer, NavBar } from "./components";
import { AboutMe, MyProject, PersonalAssistant } from "./pages";

function App() {
  return (
    <div className="bg-gray-300 dark:bg-gray-900">
      <NavBar />
      <AboutMe />
      <MyProject />
      <PersonalAssistant />
      <FooTer />
    </div>
  );
}

export default App;
