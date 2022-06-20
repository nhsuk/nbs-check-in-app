import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { LocationIndicator } from "./LocationIndicator";

export function App() {
  return (
    <>
      <Router>
        <Header />
        <LocationIndicator locationName="Montague Road Surgery" />
        <Main />
        <Footer />
      </Router>
    </>
  );
}
