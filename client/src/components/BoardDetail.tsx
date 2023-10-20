import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoardById } from "../api/boardApi";
import { Board } from "../types";

const BoardDetail = () => {
  const [board, setBoard] = useState<Board | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (!id) return;
    getBoardById(id)
      .then((board) => {
        setBoard(board);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          `게시물을 불러오는 중 오류가 발생했습니다. (${error.message})`
        );
        setError(error.message);
      });
  }, []);

  if (error)
    return <div>게시물을 불러오는 중 오류가 발생했습니다. ({error})</div>;

  if (loading) return <div>Loading...</div>;

  if (!board) return <div>게시물이 없습니다.</div>;

  return (
    <section>
      <h1>{board.title}</h1>
      <div>{board.username}</div>
      <div>{board.content}</div>
      <div>{board.createdAt}</div>
      <button>수정</button>
      <button>삭제</button>
    </section>
  );
};

export default BoardDetail;
