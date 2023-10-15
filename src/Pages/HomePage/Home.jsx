import React from "react";
import Navbar from "../../Components/NavigationBar/NavBar";
import HomeComponent from "../../Components/HomePageCmp/HomeComponent";
import SliderComp from "../../Components/Slider/SliderComp";

function HomePage() {
  // const [DataLoad, setDataLoad] = useState([]);
  return (
    <div className="Home-page">
      <Navbar />
      <SliderComp />
      <HomeComponent />
    </div>
  );
}

export default HomePage;
