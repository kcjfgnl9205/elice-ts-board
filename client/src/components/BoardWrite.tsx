import { useState } from "react";
import { createBoard } from "../api/boardApi";
import { useNavigate } from "react-router-dom";

const BoardWrite = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
  return (
    <>
      <h1>BoardWrite</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">제목</label>
        <input onChange={handleChange} type="text" id="title" name="title" />
        <br />
        <label htmlFor="content">내용</label>
        <textarea onChange={handleChange} id="content" name="content" />
        <br />
        <button>생성</button>
      </form>
    </>
  );
};

export default BoardWrite;
