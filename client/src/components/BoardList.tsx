import { useEffect, useState } from "react";
import { Board } from "../types";
import BoardItem from "./BoardItem";
import { getBoardList } from "../api/boardApi";

const BoardList = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getBoardList()
      .then((boardList) => {
        setBoards(boardList);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          `게시판 리스트를 불러오는 중 오류가 발생했습니다. (${error.message})`
        );
        setError(error.message);
      });
  }, []);

  if (error)
    return (
      <div>게시판 리스트를 불러오는 중 오류가 발생했습니다. ({error})</div>
    );

  if (loading) return <div>Loading...</div>;

  if (boards.length === 0) return <div>게시물이 없습니다..</div>;

  return (
    <>
      {boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </>
  );
};

export default BoardList;
