import { useState } from "react";

const BoardSearch = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className="text-right">
      <input
        className=" border-gray-300"
        onChange={handleChange}
        value={search}
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <button className="border border-gray-300 text-gray-700">검색</button>
    </div>
  );
};

export default BoardSearch;
