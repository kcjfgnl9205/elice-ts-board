import { useEffect, useState } from "react";
import { createBoard, updateBoard } from "../api/boardApi";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  editMode?: boolean;
};

// Fixme : 수정 & 생성 로직 리펙토링 필요
const BoardWrite = ({ editMode }: Props) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    username: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  // Fixme : 로직 수정 필요
  useEffect(() => {
    // Edit Mode 일 때
    if (editMode) {
      const board = location.state.board;
      setFormData({
        title: board.title,
        content: board.content,
        username: board.username,
      });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createBoard(formData)
      .then((data) => {
        if (data.status === "success") {
          alert(data.message);
          navigate("/");
        }
      })
      .catch(alert);
    return;
  };

  const handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    handleSubmit(e);
  };

  // Fixme : 로직 수정 필요
  const handleEdit = () => {
    const board = location.state.board;
    updateBoard(board.id, formData)
      .then((data) => {
        if (data.status === "success") {
          alert(data.message);
          navigate(`/boards/${board.id}`);
        }
      })
      .catch(alert);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">
        {editMode ? "게시판 수정" : "게시판 생성"}
      </h1>
      <form>
        <div className="flex mb-6">
          <label className="mr-2" htmlFor="title">
            제목
          </label>
          <input
            className="flex-grow"
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            value={formData.title}
          />
        </div>
        <div className="flex mb-6">
          <label className="mr-2" htmlFor="username">
            이름
          </label>
          <input
            className="flex-grow"
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
            value={formData.username}
          />
        </div>

        <div className="flex mb-6">
          <label className="mr-2 " htmlFor="content">
            내용
          </label>
          <textarea
            className="flex-grow"
            onChange={handleChange}
            id="content"
            name="content"
            value={formData.content}
          />
        </div>
      </form>
      {editMode ? (
        <button className="bg-blue-500 text-white " onClick={handleEdit}>
          수정
        </button>
      ) : (
        <button className="bg-blue-500 text-white" onClick={handleCreate}>
          생성
        </button>
      )}
    </>
  );
};

export default BoardWrite;
