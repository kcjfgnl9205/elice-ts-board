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
  });
  const navigate = useNavigate();
  const location = useLocation();

  // Fixme : 로직 수정 필요
  useEffect(() => {
    if (editMode) {
      const board = location.state.board;
      setFormData({
        title: board.title,
        content: board.content,
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
          alert("생성되었습니다.");
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(
          `게시물을 생성하는 중 오류가 발생했습니다. (${err.message})`
        );
      });
    return;
  };

  const handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    handleSubmit(e);
  };

  // Fixme : 로직 수정 필요
  const handleEdit = () => {
    updateBoard(formData).then((data) => {
      if (data.status === "success") {
        alert("수정되었습니다.");
        navigate(`/boards/${location.state.board.id}`);
      }
    });
  };

  return (
    <>
      <h1>BoardWrite</h1>
      <form>
        <label htmlFor="title">제목</label>
        <input
          onChange={handleChange}
          type="text"
          id="title"
          name="title"
          value={formData.title}
        />
        <br />
        <label htmlFor="content">내용</label>
        <textarea
          onChange={handleChange}
          id="content"
          name="content"
          value={formData.content}
        />
        <br />
      </form>
      {editMode ? (
        <button onClick={handleEdit}>수정</button>
      ) : (
        <button onClick={handleCreate}>생성</button>
      )}
    </>
  );
};

export default BoardWrite;
