import "./App.css";
import NavbarPart from "./stories/components/organisms/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./stories/components/organisms/Footer";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <NavbarPart />
      <Router />
      <Footer />
    </>
  );
}

export default App;
