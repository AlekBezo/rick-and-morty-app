import "./App.scss";
import CharactersPage from "./components/characters-page/CharactersPage";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Episodes from "./components/episodes/Episodes";
import CardDetails from "./components/card-details/CardDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path=":charId" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
