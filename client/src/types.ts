export type Board = {
  id: string;
  title: string;
  content: string;
  username: string;
  createdAt: number;
  updatedAt: number | null;
};

export type Boards = Board[];
