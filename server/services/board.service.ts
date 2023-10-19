import { DEFAULT_TIMEOUT } from "../constants/constant";
import { Board, Status, SafeBoard, SafeBoards } from "../types/types";

let items: Board[] = [
  {id: "1", title: "title1", content: "content1", username:"name1", createdAt: new Date(), updatedAt: new Date()},
  {id: "2", title: "title2", content: "content2", username:"name2", createdAt: new Date(), updatedAt: new Date()},
  {id: "3", title: "title3", content: "content3", username:"name3", createdAt: new Date(), updatedAt: new Date()},
]

const listBoards = async (query: any): Promise<SafeBoards> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = items.map((el) => {
                        const { content, ...res } = el;
                        return {
                          ...res,
                          createdAt: el.createdAt.getTime(),
                          updatedAt: el.updatedAt.getTime(),
                        };
                      });
      if (data) {
        resolve(data);
      }
    }, DEFAULT_TIMEOUT);
  });
};

const readBoard = async (params: any): Promise<SafeBoard> => {
  const { id } = params;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = items.map((el) => {
                          return {
                            ...el,
                            createdAt: el.createdAt.getTime(),
                            updatedAt: el.updatedAt.getTime(),
                          };
                        })
                        .find((item) => item.id === id);

      if (data) {
        resolve(data);
      }
    }, DEFAULT_TIMEOUT);
  });
};

const createBoard = async (body: any): Promise<Status> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: "success", message: "성공" });
    }, DEFAULT_TIMEOUT);
  });
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
