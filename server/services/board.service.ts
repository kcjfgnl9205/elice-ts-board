import { BoardModal } from "../models";
import { Board, Status, SafeBoard, SafeBoards } from "../types/types";

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

const updateBoard = async (id: string, body: any) => {
  try {
    const { title, content } = body;
    if (!title) throw new Error("제목이 존재하지 않습니다.");
    if (!content) throw new Error("내용이 존재하지 않습니다.");

    const res = await BoardModal.updateOne({ _id: id }, { title, content });
    if (res.modifiedCount === 0) {
      return { status: "error", message: "게시글을 찾을 수 없거나 업데이트되지 않았습니다." };
    }

    return { status: "success", message: "게시글 수정 성공!!!" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const deleteBoard = async (id: string) => {
  try {
    const res = await BoardModal.findByIdAndDelete({ _id: id });
    if (!res) {
      return { status: "error", message: "삭제할 게시글이 존재하지 않습니다." };
    }

    return { status: "success", message: "게시판 삭제 성공!!!" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};


export default {
  listBoards,
  readBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
