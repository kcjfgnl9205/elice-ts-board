import axios from "axios";
import { Board } from "../types";

// Get JSON file from mock folder using axios.
export const getBoardList = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/boards`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};

export const getBoardById = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/boards/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};

export const createBoard = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/boards`,
      { title, content }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};

export const removeBoardById = async (id: string) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/boards/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};

export const updateBoard = async (formData: Partial<Board>) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/api/boards/${formData.id}`,
      formData
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};
