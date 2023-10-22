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
      .catch((err) => {
        setError(err.message);
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
      <div className="mx-auto">
        <h1 className="text-2xl font-bold mb-5">게시판 리스트</h1>
        <div className="flex justify-between items-center mb-2 ">
          <p>게시물 수: {boards.length}</p>
          <p>정렬: 최신순</p>
        </div>

        <div className="border-b p-4 bg-purple-500 text-white font-bold">
          <div className="flex items-center text-center">
            <div className="mr-4 w-20">번호</div>
            <div className="flex-grow">제목</div>
            <div className="mx-4 w-24">닉네임</div>
            <div className="mx-3 w-24">게시 날짜</div>
            <div className="mx-3 w-24">수정 날짜</div>
          </div>
        </div>

        {boards.map((board, idx) => (
          <BoardItem key={board.id} board={board} idx={++idx} />
        ))}
      </div>
    </>
  );
};

export default BoardList;
