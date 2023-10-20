import { DEFAULT_TIMEOUT } from "../constants/constant";
import { BoardModal } from "../models";
import { Board, Status, SafeBoard, SafeBoards } from "../types/types";

let items: Board[] = [
  {id: "1", title: "title1", content: "content1", username:"name1", createdAt: new Date(), updatedAt: new Date()},
  {id: "2", title: "title2", content: "content2", username:"name2", createdAt: new Date(), updatedAt: new Date()},
  {id: "3", title: "title3", content: "content3", username:"name3", createdAt: new Date(), updatedAt: new Date()},
]

const listBoards = async (query: any) => {
  try {
    const items = await BoardModal.find({}).exec();
    return items.map((item) => {
      const { content, ...res } = item.toObject();
      const data: Omit<SafeBoard, "content"> = {
        ...res,
        id: res.id,
        createdAt: item.createdAt.getTime(),
        updatedAt: item.updatedAt?.getTime() ?? null,
      };
      return data;
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const readBoard = async (params: any) => {
  const { id } = params;
  try {
    if (!id) {
      throw new Error("입력하신 ID가 존재하지 않습니다.");
    }

    const item = await BoardModal.findById(id).exec();
    if (item) {
      const data: SafeBoard = {
        ...item.toObject(),
        createdAt: item.toObject().createdAt.getTime(),
        updatedAt: item.toObject().updatedAt?.getTime() ?? null
      }
      return data;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const createBoard = async (body: any) => {
  try {
    const { title, content, username } = body;
    if (!title) throw new Error("제목이 존재하지 않습니다.");
    if (!content) throw new Error("내용이 존재하지 않습니다.");

    const boardModal = new BoardModal({
      title,
      content,
      username: username ?? "admin"
    });

    const data = await boardModal.save();
    if (data) {
      const res: Status = { status: "success", message: "게시글 작성 성공!!!" };
      return res;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const updateBoard = async (id: any, body: any): Promise<Status> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: "success", message: "성공" });
    }, DEFAULT_TIMEOUT);
  });
};

const deleteBoard = async (id: any): Promise<Status> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: "success", message: "성공" });
    }, DEFAULT_TIMEOUT);
  });
};


export default {
  listBoards,
  readBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
