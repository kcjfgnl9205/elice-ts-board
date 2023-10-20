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
