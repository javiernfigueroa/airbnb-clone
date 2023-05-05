import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";

function App() {
  return <>
  <NavBar/>
  <Card
  img="katie-zaferes.png"
  rating="5.0"
  reviews={6}
  country="USA"
  text="Life lessons with Katie Aaferes"
  price={136}
  />
  </>
}

export default App;

