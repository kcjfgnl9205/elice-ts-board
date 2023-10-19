import BoardList from "./components/BoardList";
import BoardHeader from "./components/BoardHeader";
import BoardFooter from "./components/BoardFooter";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BoardHeader />
      <Routes>
        <Route path="/" element={<BoardList />} />
      </Routes>
      <BoardFooter />
    </>
  );
}

export default App;
