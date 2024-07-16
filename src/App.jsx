import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PortfolioDetail from "./components/PortfolioDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Intro />
        <About />
        <Education />
        <Experience />
        <Portfolio />
        <PortfolioDetail />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
