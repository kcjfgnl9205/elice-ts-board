import BoardList from "./components/BoardList";
import BoardHeader from "./components/BoardHeader";
import BoardFooter from "./components/BoardFooter";
import { Route, Routes } from "react-router-dom";
import BoardDetail from "./components/BoardDetail";

function App() {
  return (
    <>
      <BoardHeader />
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
      </Routes>
      <BoardFooter />
    </>
  );
}

export default App;
