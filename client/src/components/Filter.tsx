const Filter = () => {
  return (
    <div className=" flex items-center   ">
      <select
        id="filter"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        defaultValue={"latest"}
      >
        <option value="latest">최신순</option>
        <option value="oldest">오래된 순</option>
        <option value="commentCount">댓글 순</option>
        <option value="recommended">추천 순</option>
      </select>
    </div>
  );
};

export default Filter;
