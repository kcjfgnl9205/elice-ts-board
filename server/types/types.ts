// 게시판 내용 타입
export type Board = {
  id: string;
  title: string;
  content: string;
  username: string;

  createdAt: Date;
  updatedAt: Date | null;
}

export type SafeBoard = Omit<Board, "createdAt" | "updatedAt"> & {
  createdAt: number;
  updatedAt: number | null;
};

// 게시판 리스트 타입
export type SafeBoards = Omit<SafeBoard, "content">[];

// 상태타입
export type Status = {
  status: "success" | "error";
  message: string;
};
