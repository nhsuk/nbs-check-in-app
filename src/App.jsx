import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { LocationIndicator } from "./LocationIndicator";

export function App() {
  return (
    <>
      <Header />
      <LocationIndicator locationName="Montague Road Surgery" />
      <Main />
      <Footer />
    </>
  );
}
