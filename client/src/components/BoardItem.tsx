import { Board } from "../types";
import { Link } from "react-router-dom";
type Props = {
  board: Board;
  idx: number;
};

const BoardItem = ({ board, idx }: Props) => {
  const { id, title, username, createdAt, updatedAt } = board;

  return (
    <div className="border-b p-4 hover:bg-purple-200 text-center">
      <div className="flex items-center">
        <div className="mr-4 w-20">{idx}</div>
        <Link className="flex-grow" to={`/boards/${id}`}>
          {title}
        </Link>
        <div className="mx-4 w-24">{username}</div>
        <div className="mx-3 w-24 text-gray-400">{createdAt}</div>
        <div className="mx-3 w-24 text-gray-400">
          {updatedAt ? updatedAt : "-"}
        </div>
      </div>
    </div>
  );
};

export default BoardItem;
