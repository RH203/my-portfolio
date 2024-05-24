import { FooTer, NavBar } from "./components";
import { AboutMe, MyProject, PersonalAssistant } from "./pages";
import Wave from "react-wavify";

function App() {
  return (
    <div className="bg-gray-300 dark:bg-gray-900">
      <NavBar />
      <AboutMe />
      <Wave
        fill="url(#gradient)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 40,
          amplitude: 50,
          speed: 0.20,
          points: 4,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor="#d4af37" />
            <stop offset="80%" stopColor="#f00" />
          </linearGradient>
        </defs>
      </Wave>
      <MyProject />
      <PersonalAssistant />
      <FooTer />
    </div>
  );
}

export default App;
