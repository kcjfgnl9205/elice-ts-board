import axios from "axios";
import { Board } from "../types";

const customError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      throw new Error(error.message);
    }
    if (error.response?.status === 400) {
      throw new Error(error.response.data.message);
    }
    throw new Error("예상치 못한 에러가 발생했습니다.");
  }
};

// 게시판 목록 조회
export const getBoardList = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/boards`
    );
    return response.data;
  } catch (error) {
    customError(error);
  }
};

// 게시판 상세 조회
export const getBoardById = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/boards/${id}`
    );
    return response.data;
  } catch (error) {
    customError(error);
  }
};

// 게시판 등록
export const createBoard = async ({
  title,
  content,
  username,
}: {
  title: string;
  content: string;
  username: string;
}) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/boards`,
      { title, content, username }
    );
    return response.data;
  } catch (error) {
    customError(error);
  }
};

// 게시판 삭제
export const removeBoardById = async (id: string) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/boards/${id}`
    );
    return response.data;
  } catch (error) {
    customError(error);
  }
};

// 게시글 수정
export const updateBoard = async (id: string, formData: Partial<Board>) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/api/boards/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    customError(error);
  }
};
