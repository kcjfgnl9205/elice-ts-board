import axios from "axios";

type ErrorResponseType = {
  message: string;
};
// Get JSON file from mock folder using axios.
export const getBoardList = async () => {
  try {
    const response = await axios.get("/src/mock/boards.json");
    return response.data.boards;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};
