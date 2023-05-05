import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import Data from "./Data";

const cards = Data.map((item) => {
  return (
    <Card
      key={item.id}
      {...item}
    />
  );
});

function App() {
  return (
    <>
      <NavBar />
      <Hero></Hero>
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
