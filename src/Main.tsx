import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Pages from "./Pages/Pages"

export default function Main() {
    return (
        <BrowserRouter>
          <div className="browser router" style={{background: 'red'}}>
            <Navbar />
            <Pages />
          </div>
        </BrowserRouter>
      );
}