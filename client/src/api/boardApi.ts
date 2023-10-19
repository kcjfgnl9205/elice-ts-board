import axios from "axios";

// Get JSON file from mock folder using axios.
export const getBoardList = async () => {
  const response = await axios.get("/src/mock/boards.json");
  return response.data.boards;
};
