import { Calendar } from "lucide-react";
import "./App.css";
import Hero from "./components/Hero/Hero";

import WeddingDate from "./components/Date/WeddingDate";
import Place from "./components/Place/Place";
import Time from "./components/Time/Time";
import Drees from "./components/Drees/Drees";
import Foto from "./components/Foto/Foto";

function App() {
  return (
    <div className="containerApp">
      <div className="section">
        <Hero />
      </div>
      <div className="section section2">
        <WeddingDate />
      </div>
      <div className="section ">
        <Place />
      </div>
      <div className="section ">
        <Time />
      </div>
      <div className="section ">
        <Drees />
      </div>
      <div className="section ">
        <Foto />
      </div>
    </div>
  );
}

export default App;
