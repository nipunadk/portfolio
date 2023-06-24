import "./public/styles/main.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
//import Projects from "./components/Projects";

function App() {
  return (
    <div className="app-container">
      <MainPage />
      <AboutMe />
      {/* <Projects /> */}
      <Contact />
      <div style={{ textAlign: "center" }} >
        <footer> <small>&copy; Copyright {(new Date().getFullYear())}, Nipuna Gomes.</small> </footer>
      </div>
    </div>
  );
}

export default App;
