import { useEffect, useState } from "react";
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
import Modal from "./Components/modal/modal";

function App() {
  const [closeModal, setCloseModal] = useState(true);

  useEffect(() => {
    const modal = document.querySelector(".modal-bg");
    closeModal
      ? (modal.style.display = "none")
      : (modal.style.display = "block");
  }, [closeModal]);

  const toggleModal = () => setCloseModal((perv) => !perv);

  return (
    <div className="App">
      <Modal onToggle={toggleModal} />
      <Header onToggle={toggleModal} />
      <HeaderTimer  />
      <MainBanner onToggle={toggleModal} />
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
