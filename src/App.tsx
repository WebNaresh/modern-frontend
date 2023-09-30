import { Toaster } from "react-hot-toast";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import RouteHandler from "./routeHandler";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <div className="mt-[100px]">
          <RouteHandler />
        </div>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
