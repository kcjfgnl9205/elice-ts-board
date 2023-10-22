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
      <section className="flex-grow  w-full max-w-6xl px-4 mx-auto">
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
          <Route path="/boards/write" element={<BoardWrite />} />
          <Route path="/boards/:id/edit" element={<BoardWrite editMode />} />
        </Routes>
      </section>
      <BoardFooter />
    </>
  );
}

export default App;
