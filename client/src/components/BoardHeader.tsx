import { Link } from "react-router-dom";

const BoardHeader = () => {
  return (
    <header className="w-full border-b border-gray-500/30 mb-5">
      <div className="mx-auto max-w-6xl">
        <div className="py-4 mx-4 flex justify-between">
          <Link to={"/"}>
            <h1 className="text-4xl">Elice 게시판</h1>
          </Link>
          <ul className="flex items-center gap-5">
            <li className="">
              <Link to={"/"}>홈</Link>
            </li>
            <li>
              <Link to={"/boards/write"}>생성</Link>
            </li>
            <li>
              <Link to={"/login"}>로그인</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default BoardHeader;
