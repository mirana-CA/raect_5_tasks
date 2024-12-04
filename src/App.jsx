import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./pages/tabs";
import Navbar from "./layout/navbar";
import Drawer from "./pages/drawer";
import Collapse from "./pages/collapse";
import CoinFlip from "./pages/coin-flip";
import BmiCalculator from "./pages/bmi-calculator";
import Nopage from "./pages/nopage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Tabs />} />
            <Route path="drawer" element={<Drawer />} />
            <Route path="collapse" element={<Collapse />} />
            <Route path="coinflip" element={<CoinFlip />} />
            <Route path="bmicalculator" element={<BmiCalculator />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
