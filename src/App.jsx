import Content from "./components/container/content";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="min-h-[100vh]">
        <Content />
      </div>
    </>
  );
}

export default App;
