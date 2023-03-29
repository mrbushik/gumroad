import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Components/styles/main.scss";
import Header from "./Components/navigation/header";
import HeaderTimer from "./Components/ui/headerTimer";
import MainBanner from "./Components/ui/mainBanner";
import JudgesSection from "./Components/ui/judgesSection";
import People from "./Components/ui/people";
import Questions from "./Components/ui/questions";
import GrowTogether from "./Components/ui/growTogether";
import OtherInfo from "./Components/ui/otherInfo";
import Footer from "./Components/navigation/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <HeaderTimer />
      <MainBanner />
      <JudgesSection />
      <People />
      <Questions />
      <GrowTogether />
      <OtherInfo />
      <Footer />
    </div>
  );
}

export default App;
