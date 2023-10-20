import { Link } from "react-router-dom";

const BoardHeader = () => {
  return (
    <>
      <h1>BoardHeader</h1>
      <ul>
        <li>
          <Link to={"/"}>홈</Link>
        </li>
        <li>
          <Link to={"/boards/write"}>생성</Link>
        </li>
      </ul>
    </>
  );
};

export default BoardHeader;
