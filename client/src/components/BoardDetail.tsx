import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBoardById, removeBoardById } from "../api/boardApi";
import { Board } from "../types";

const BoardDetail = () => {
  const [board, setBoard] = useState<Board | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleRemove = () => {
    if (!id) return;
    removeBoardById(id)
      .then((data) => {
        if (data.status === "success") {
          alert("삭제되었습니다.");
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(
          `게시물을 삭제하는 중 오류가 발생했습니다. (${err.message})`
        );
        setError(err.message);
      });
  };

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
      <button onClick={handleRemove}>삭제</button>
    </section>
  );
};

export default BoardDetail;
