import { Board } from "../types";
import { Link } from "react-router-dom";
type Props = {
  board: Board;
};

const BoardItem = ({ board }: Props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>{board.id}</div>
        <Link to={`/boards/${board.id}`}>{board.title}</Link>
        <div>{board.username}</div>
        <div>{board.createdAt}</div>
      </div>
    </>
  );
};

export default BoardItem;
