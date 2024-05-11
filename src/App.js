import './App.css';
import Hero from './Hero';
import { ShopContextProvider } from "./shop-context.js"

function App() {
  return (
      <ShopContextProvider>
      <Hero />
      </ShopContextProvider>
  );
}

export default App;
