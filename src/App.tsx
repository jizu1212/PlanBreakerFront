import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";
import "./App.css";
import Footer from "./layout/Footer";
function App() {
  return (
    <div className="flex flex-col">
      <Header title="myapptitlejisoo" />
      <div className="w-full flex flex-1 justify-start ">
        <MainContent />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
