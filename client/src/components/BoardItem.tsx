import { Board } from "../types";

type Props = {
  board: Board;
};

const BoardItem = ({ board }: Props) => {
  return (
    <>
      <div>
        <div>{board.id}</div>
        <div>{board.title}</div>
        <div>{board.username}</div>
        <div>{board.createdAt}</div>
      </div>
    </>
  );
};

export default BoardItem;
