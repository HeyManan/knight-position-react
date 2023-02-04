import Chessboard from "./components/Chessboard/Chessboard.js";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chessboard />
      <Footer />
    </div>
  );
}

export default App;
