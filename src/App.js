import Header from "./components/Header/Header";
import LeftNav from "./components/LeftNav/LeftNav";
import Content from "./components/Content";

function App() {
  return (
    <div className="app-root">
      <Header />
      <div className="app-container">
        <LeftNav />
        <Content />
      </div>
    </div>
  );
}

export default App;
