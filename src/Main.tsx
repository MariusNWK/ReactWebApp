import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Pages from "./Pages/Pages";

export default function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
    </BrowserRouter>
  );
}
