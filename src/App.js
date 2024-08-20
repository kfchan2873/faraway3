import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Form />
        <PackingList />
        <Footer />
      </header>
    </div>
  );
}

export default App;
