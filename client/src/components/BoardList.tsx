import { useEffect, useState } from "react";
import { Board } from "../types";
import BoardItem from "./BoardItem";
import { getBoardList } from "../api/boardApi";

const BoardList = () => {
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    getBoardList().then((boardList) => {
      setBoards(boardList);
    });
  }, []);

  if (!boards.length) return <div>Loading...</div>;

  return (
    <>
      {boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </>
  );
};

export default BoardList;
