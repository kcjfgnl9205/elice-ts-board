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
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleRemove = () => {
    if (!id) return;
    removeBoardById(id)
      .then((data) => {
        if (data.status === "success") {
          alert(data.message);
          navigate("/");
        }
      })
      .catch(alert);
  };

  // Go to BoardWrite.tsx
  const handleEdit = () => {
    if (!id) return;
    navigate(`/boards/${id}/edit`, { state: { board } });
  };

  if (error)
    return <div>게시물을 불러오는 중 오류가 발생했습니다. ({error})</div>;

  if (loading) return <div>Loading...</div>;

  if (!board) return <div>게시물이 없습니다.</div>;

  const { title, username, content, createdAt } = board;
  const date = new Date(createdAt);
  return (
    <>
      <div className="mx-auto h-full">
        <div className="flex flex-col h-full">
          <h1 className="text-4xl font-bold ">{title}</h1>
          <div className="mb-5 text-gray-400">by {username}</div>
          <div className="flex-grow text-2xl">{content}</div>
          <div>{date.toLocaleString()}</div>
          <div>
            <button
              className=" bg-blue-500 text-white w-1/2"
              onClick={handleEdit}
            >
              수정
            </button>
            <button
              className=" bg-red-500 text-white w-1/2"
              onClick={handleRemove}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardDetail;
