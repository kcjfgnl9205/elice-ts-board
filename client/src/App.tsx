import BoardList from "./components/BoardList";
import BoardHeader from "./components/BoardHeader";
import BoardFooter from "./components/BoardFooter";
import { Route, Routes } from "react-router-dom";
import BoardDetail from "./components/BoardDetail";
import BoardWrite from "./components/BoardWrite";

function App() {
  return (
    <>
      <BoardHeader />
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
        <Route path="/boards/write" element={<BoardWrite />} />
        <Route path="/boards/:id/edit" element={<BoardWrite editMode />} />
      </Routes>
      <BoardFooter />
    </>
  );
}

export default App;
